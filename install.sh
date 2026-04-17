#!/bin/bash
# Como usar:
# Faça o download deste arquivo e execute-o com: bash install.sh
# OU rode diretamente: curl -sL https://raw.githubusercontent.com/marcelorobadel2-wq/GUSTA-FIT-NITROFIT/main/install.sh | bash

sudo rm -rf /var/www/GUSTA-FIT-NITROFIT && sudo mkdir -p /var/www && cd /var/www && sudo git clone https://github.com/marcelorobadel2-wq/GUSTA-FIT-NITROFIT.git && cd GUSTA-FIT-NITROFIT && sudo bash install_ubuntu.sh
