
import axios from "axios";

const options = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
};

const client = axios.create(options);

export default client;
