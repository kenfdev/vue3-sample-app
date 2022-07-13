import { getUsers } from '@/api/users';
import { useInfiniteQuery } from 'vue-query';
import { ref, watch } from 'vue';
import { User } from '@/shared/models/user';

export const USERS_QUERY_KEY = 'users';

export function useUsers() {
  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(
    USERS_QUERY_KEY,
    (ctx) => getUsers(ctx.pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.meta.nextPage,
    }
  );

  const users = ref<User[]>(
    data.value?.pages.flatMap((page) => page.data) || []
  );

  watch(data, () => {
    users.value = data.value?.pages.flatMap((page) => page.data) || [];
  });

  return {
    users,
    isLoading,
    fetchNextPage,
    hasNextPage,
  };
}
