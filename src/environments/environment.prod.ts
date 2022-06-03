import { Environment } from './../app/shared/interfaces/environment';
export const environment: Environment = {
  production: true,
  urlApi: 'http://localhost:8000',
  api: { getItems: '/getItems' }
};
