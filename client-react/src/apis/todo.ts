import axios from 'axios';

export const todoApi = axios.create({
  baseURL: 'https://3i1ivncr4c.execute-api.us-east-2.amazonaws.com/dev',
});
