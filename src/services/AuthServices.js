/* eslint-disable */
import axios from 'axios';
import { postData } from 'src/helpers/axios';

const config = require(`../config/${process.env.REACT_APP_ENV}`);

const URL = config.API_URL

export const UserLogin = async (user) => postData(`/auth/jwt/create/`,user);