import { createUser, UserCreateInput } from '@/api/users';
import { useMutation, useQueryClient } from 'vue-query';
import { USERS_QUERY_KEY } from './useUsers';

export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation<string, unknown, UserCreateInput>(
    (newUserInput) => createUser(newUserInput),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(USERS_QUERY_KEY);
      },
    }
  );
}
