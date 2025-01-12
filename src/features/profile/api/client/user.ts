import {AuthResponse, LoginInput, User} from '../../types';
import {API_ENDPOINTS} from './api-endpoints';
import {HttpClient} from './http-client';

export const userClient = {
  me: () => {
    return HttpClient.get<User>(API_ENDPOINTS.ME);
  },
  login: (variables: LoginInput) => {
    return HttpClient.post<AuthResponse>(API_ENDPOINTS.TOKEN, variables);
  },
};
