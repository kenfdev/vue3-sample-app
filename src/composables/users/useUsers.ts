import { getUsers } from '@/api/users';
import useSWRV from 'swrv';

export function useUsers() {
  const { data, isValidating, mutate, error } = useSWRV('/users', getUsers, {
    revalidateOnFocus: false,
  });

  return {
    users: data,
    loading: isValidating,
    mutate,
    error,
  };
}
