import { useAuthStore } from '@/store/authStore';
import axios from 'axios';

export const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().accessToken;
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const status = error.response?.status;

    if (status === 401) {
      try {
        const success = await useAuthStore.getState().refreshAccessToken();

        if (!success) {
          useAuthStore.getState().clearAccessToken();
          // window.location.href = '/login';
          return await Promise.reject(error);
        }

        const newToken = useAuthStore.getState().accessToken;

        if (newToken && originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
        }
        return await axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error('refresh 실패', refreshError);
        useAuthStore.getState().clearAccessToken();
        // window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
