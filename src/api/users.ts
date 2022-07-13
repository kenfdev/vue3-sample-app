import { User } from '@/shared/models/user';
import axios from './client';
import { checkHasNextPage, PagingResponse } from './shared';

export type UserCreateInput = Omit<User, 'id' | 'img'>;

export async function getUsers(
  page: number = 1
): Promise<PagingResponse<User[]>> {
  const { data, headers } = await axios.get<User[]>(`/users?_page=${page}`);
  const hasNextPage = checkHasNextPage(headers);

  return {
    meta: {
      currentPage: page,
      nextPage: hasNextPage ? page + 1 : null,
    },
    data,
  };
}

export async function createUser(newUser: UserCreateInput): Promise<any> {
  const result = await axios.post('/users', newUser);
  return { data: result.data };
}
