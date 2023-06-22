/* eslint-disable */
import axios from 'axios';
import { getJwtToken } from 'src/utils/localStorage';
const config = require(`../config/${process.env.REACT_APP_ENV}`);
const token = getJwtToken()

const headers = {
    'Content-Type': 'application/json',
  };
  
  if (token) {
    headers['JWT'] = token;
  }
  
  const API = axios.create({
    baseURL: config.API_URL,
    timeout: 20000,
    headers,
  });
// Generic GET Request
export const fetchData = async (url) => {
  try {
    const response = await API.get(url);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

// Generic POST Request
export const postData = async (url, data) => {
    try {
      const response = await API.post(url, data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

// Generic PUT Request
export const putData = async (url, data) => {
    try {
      const response = await API.put(url, data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  
  // Generic DELETE Request
  export const deleteData = async (url) => {
    try {
      const response = await API.delete(url);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }