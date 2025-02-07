import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000';

export const uploadURL = (url: string) => {
  if (!url || !url.toLowerCase().endsWith(".pdf")) {
    throw new Error("Invalid URL: must be a valid PDF URL.");
  }
  return axios.post(`${API_URL}/extract`, { pdf_url: url });
};

export const getUrlText = (url: string) => {
  return axios.get(`${API_URL}/extract/${url}`);
}
