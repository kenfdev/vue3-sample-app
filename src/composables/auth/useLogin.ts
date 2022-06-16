import { login as loginApi } from '@/api/login';
import { ref } from 'vue';
import { useCurrentUser } from './useCurrentUser';

export function useLogin() {
  const { setUser } = useCurrentUser();
  const loading = ref(false);

  const login = async () => {
    loading.value = true;
    const user = await loginApi();
    setUser(user);
    loading.value = false;
  };

  return {
    login,
    loading,
  };
}
