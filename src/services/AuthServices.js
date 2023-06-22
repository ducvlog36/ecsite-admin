/* eslint-disable */
import { postData } from "src/helpers/axios";

export const UserLogin = async (user) => postData("/auth/jwt/create/",user);