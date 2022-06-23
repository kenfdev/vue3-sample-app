import { getUsers } from '@/api/users';
import { useInfiniteQuery } from 'vue-query';

export function useUsers() {
  return useInfiniteQuery('users', (ctx) => getUsers(ctx.pageParam), {
    getNextPageParam: (lastPage) => lastPage.meta.nextPage,
  });
}
