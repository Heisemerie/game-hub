import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<D> {
  count: number;
  next: string | null;
  results: D[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "75b6e2dad1df4e60a3029047ac5b9dd9",
  },
});

export class APIclient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}
