#!/bin/bash
export DEBIAN_FRONTEND=noninteractive
set -e

# ==========================================================================
# GUSTA FITNESS - UBUNTU 22.04 DEPLOYMENT SCRIPT
# ==========================================================================
# This script installs Node.js, Nginx, PHP-FPM and configures the project.
# Run as root or with sudo: sudo bash install_ubuntu.sh
# ==========================================================================

echo "🚀 Iniciando instalação Gusta Fitness no Ubuntu 22.04..."

# 1. Verificação de permissões
if [ "$EUID" -ne 0 ]; then
  echo "❌ Por favor, rode como root (use sudo)"
  exit
fi

# 2. Configurações
PROJECT_NAME="gusta-fitness"
PROJECT_ROOT="/var/www/GUSTA-FIT-NITROFIT" # Alinhado com o caminho do clone mestre
DOMAIN="localhost"

# 3. Atualização do Sistema
echo "📦 Atualizando pacotes do sistema..."
apt-get update && apt-get upgrade -y -o Dpkg::Options::="--force-confdef" -o Dpkg::Options::="--force-confold"

# 4. Instalação de Dependências
echo "🛠 Instalando Nginx, PHP e ferramentas..."
apt-get install -y curl git build-essential nginx php8.1-fpm php8.1-cli php8.1-mbstring php8.1-xml php8.1-curl certbot python3-certbot-nginx

# 5. Instalação do Node.js 20.x
echo "🟢 Instalando Node.js 20..."
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs

# 6. Preparação do Diretório e Build
echo "📂 Preparando build no diretório atual..."
# Nota: O script assume que está sendo executado de dentro da pasta clonada
npm install --legacy-peer-deps
npm run build

# 7. Configuração de Permissões
echo "🔐 Configurando permissões para o servidor web..."
chown -R www-data:www-data .
chmod -R 755 .

# 8. Configuração do Nginx
echo "🌐 Configurando Nginx..."
NGINX_CONF="/etc/nginx/sites-available/$PROJECT_NAME"

tee $NGINX_CONF > /dev/null <<EOF
server {
    listen 80;
    server_name $DOMAIN;
    root $(pwd)/dist;
    index index.html;

    # Compressão Gzip
    gzip on;
    gzip_vary on;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml;

    # React SPA Fallback
    location / {
        try_files \$uri \$uri/ /index.html;
    }

    # Cache de Assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|otf)$ {
        expires 1y;
        add_header Cache-Control "public, no-transform";
    }

    # Suporte ao PHP Legado
    location /php-version {
        alias $(pwd)/PHP;
        index index.php;
        
        location ~ \.php$ {
            include snippets/fastcgi-php.conf;
            fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
            fastcgi_param SCRIPT_FILENAME \$request_filename;
        }
    }

    location ~ /\. {
        deny all;
    }
}
EOF

# Habilitar site e reiniciar Nginx
ln -sf $NGINX_CONF /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl restart nginx

echo "--------------------------------------------------------"
echo "✅ SUCESSO! O Gusta Fitness foi instalado."
echo "🌍 Acesse em: http://$(curl -s ifconfig.me || echo $DOMAIN)"
echo "--------------------------------------------------------"

