import apiClient from './api';

export const exampleService = {
  getExampleData: () => apiClient.get('/data'),
  postExampleData: (data: any) => apiClient.post('/data', data),
};
