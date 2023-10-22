import axios from "axios";
import { PropsWithChildren } from "react";

interface ReceivedUser {
  id: string;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
}

interface SendUSer {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

interface LoginUser {
  email: string;
  password: string;
}

export async function signUp(data: SendUSer) {
  const url = `https://api.escuelajs.co/api/v1/users/`;
  await axios.post(url, data);
}

export async function signIn(data: LoginUser) {
  const url = `https://api.escuelajs.co/api/v1/auth/login`;
  const response = await axios.post(url, data);
  const receivedToken = response.data.access_token;
  return receivedToken;
}

export async function checkEmail(data: { email: string }) {
  const url = `https://api.escuelajs.co/api/v1/users/is-available`;
  const response = await axios.post(url, data);
  const isEmailAvailable = response.data.isAvailable;
  return isEmailAvailable;
}

export async function changePassword(id: number, data: LoginUser) {
  const url = `https://api.escuelajs.co/api/v1/users/${id}`;
  await axios.put(url, data);
}

export async function getUserById(id: number) {
  const userUrl = `https://api.escuelajs.co/api/v1/users/${id}`;
  const response = await axios.get(userUrl);
  const data = response.data;
  return data;
}

export async function getIdByUserEmail(email: string) {
  const url = `https://api.escuelajs.co/api/v1/users`;
  const response = await axios.get(url);
  const data = response.data.filter(
    (user: ReceivedUser) => user.email === email
  );
  const id = data[0].id;
  return id;
}

export async function getUserByToken(token: string) {
  const url = `https://api.escuelajs.co/api/v1/auth/profile`;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  const response = await axios.get(url, config);
  const data = response.data;
  return data;
}
