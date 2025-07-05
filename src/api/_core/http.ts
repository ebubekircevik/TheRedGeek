import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

export async function apiGet<T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> {
  const response: AxiosResponse<T> = await axios.get(
    `${API_BASE_URL}${url}`,
    config
  );
  return response.data;
}

export async function apiPost<T>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<T> {
  const response: AxiosResponse<T> = await axios.post(
    `${API_BASE_URL}${url}`,
    data,
    config
  );
  return response.data;
}

export async function apiPut<T>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<T> {
  const response: AxiosResponse<T> = await axios.put(
    `${API_BASE_URL}${url}`,
    data,
    config
  );
  return response.data;
}

export async function apiDelete<T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> {
  const response: AxiosResponse<T> = await axios.delete(
    `${API_BASE_URL}${url}`,
    config
  );
  return response.data;
}

export const httpClient = {
  get: apiGet,
  post: apiPost,
  put: apiPut,
  delete: apiDelete,
  async patch<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response: AxiosResponse<T> = await axios.patch(
      `${API_BASE_URL}${url}`,
      data,
      config
    );
    return response.data;
  },
};
