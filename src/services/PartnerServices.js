/* eslint-disable */
import axios from 'axios';

const config = require(`../config/${process.env.REACT_APP_ENV}`);

const URL = config.API_URL

export const getAllPartner = async () => {
    try {
      const response = await axios.get(`${URL}/partner/list/`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };