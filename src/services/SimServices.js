/* eslint-disable */
import axios from 'axios';
import { fetchData } from 'src/helpers/axios';


export const getAllSimPlan = async () => fetchData(`/store/sim_plans`);

  export const getAllSimType = async () => {
    try {
      const headers={
        'Content-Type': 'application/json',
        'JWT': `${accessToken}`,
      }
      const response = await axios.get(`${URL}/store/sim_types/`,{headers});
      return response.data.results;
    } catch (error) {
      console.error(error);
    }
  };

  export const getAllPromotion = async () => {
    try {
      const headers={
        'Content-Type': 'application/json',
        Authorization: `JWT ${accessToken}`,
      }
      const response = await axios.get(`${URL}/store/promotions/`,{headers});
      return response.data.results;
    } catch (error) {
      console.error(error);
    }
  };