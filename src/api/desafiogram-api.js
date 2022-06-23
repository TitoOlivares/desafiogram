import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api';

export async function signup(params) {
  try {
    const response = await axios.post(`${BASE_URL}/usuarios/signup`, params)

    return response;

  } catch (error) {
    return error;
  }
}

export async function loginInsta(params) {
  try {
    const response = await axios.post(`${BASE_URL}/usuarios/login`, params)

    return response;

  } catch (error) {
    return error;
  }
}

export async function getExplore() {
  const token = localStorage.getItem('instaToken');

  try {
    const response = await axios.get(`${BASE_URL}/usuarios/explore`, {
      headers: { 'Authorization': `bearer ${token}` }
    })

    return response;

  } catch (error) {
    return error;
  }
}