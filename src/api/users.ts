import { User } from '@/shared/models/user';
import axios from './client';
import { PagingResponse } from './shared';

export async function getUsers(
  page: number = 1
): Promise<PagingResponse<User[]>> {
  console.log('page', page);
  const { data, headers } = await axios.get<User[]>(`/users?_page=${page}`);
  const hasNextPage = headers['link'].includes('rel="next"');
  return {
    meta: {
      currentPage: page,
      nextPage: hasNextPage ? page + 1 : null,
    },
    data,
  };
}
