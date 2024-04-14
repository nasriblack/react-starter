// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import API_DATABASE_URL from './base_url';

export const http = axios.create({
  baseURL: API_DATABASE_URL.API_EXAMPLE_STAGING,
  timeout: 30000,
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  },
});

export const httpwithtoken = axios.create({
  baseURL: API_DATABASE_URL.API_EXAMPLE_STAGING,
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});
