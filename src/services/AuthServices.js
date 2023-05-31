/* eslint-disable */
import axios from 'axios';

const config = require(`../config/${process.env.REACT_APP_ENV}`);

const URL = config.API_URL

export const getAllUser = async () => {
    try {
      const response = await axios.get(`${URL}/sim_inventory/sims/`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };