import axios from 'axios';

const API_BASE_URL = 'https://your-api-base-url.com/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If the error status is 401 and there is no originalRequest._retry flag,
    // it means the token has expired and we need to refresh it
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem('refreshToken');
        const response = await axios.post(`${API_BASE_URL}/auth/refresh`, {
          refreshToken,
        });
        const { token } = response.data;

        localStorage.setItem('token', token);

        // Retry the original request with the new token
        originalRequest.headers['Authorization'] = `Bearer ${token}`;
        return api(originalRequest);
      } catch (error) {
        // Refresh token failed, logout user or handle error
      }
    }

    return Promise.reject(error);
  }
);

export const login = (email, password) =>
  api.post('/auth/login', { email, password });
export const register = (userData) => api.post('/auth/register', userData);
export const getEmployees = () => api.get('/employees');
export const getEmployee = (id) => api.get(`/employees/${id}`);
export const createEmployee = (employeeData) =>
  api.post('/employees', employeeData);
export const updateEmployee = (id, employeeData) =>
  api.put(`/employees/${id}`, employeeData);
export const deleteEmployee = (id) => api.delete(`/employees/${id}`);

// Add more API calls as needed for other features (leave management, payroll, etc.)

export default api;
