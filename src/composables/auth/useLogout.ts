import { useCurrentUser } from './useCurrentUser';

export function useLogout() {
  const { setUser } = useCurrentUser();

  const logout = async () => {
    setUser(null);
  };

  return {
    logout,
  };
}
