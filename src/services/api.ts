import axios from 'axios';

// Instância do Axios
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
});

// Interceptor para injetar o token JWT em cada requisição automaticamente
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('@GustaFitness:token');
  
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Interceptor para lidar com token expirado
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expirou ou é inválido, deslogar usuário (Lógica que implementaremos no AuthContext depois)
      console.error("Token Inválido ou Sessão Expirada");
      localStorage.removeItem('@GustaFitness:token');
      localStorage.removeItem('@GustaFitness:user');
    }
    return Promise.reject(error);
  }
);
