import axios from "axios";

export interface FetchResponse<D> {
  results: D[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "75b6e2dad1df4e60a3029047ac5b9dd9",
  },
});
