import axios from "axios";

export const apiService = axios.create({
  baseURL: 'https://alunos.treinaweb.com.br/hyperprof',
  headers: {
    "Content-Type": "application/json"
  }
})
