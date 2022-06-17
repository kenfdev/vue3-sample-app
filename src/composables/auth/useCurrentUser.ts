import { mockUser } from '@/api/login';
import { User } from '@/shared/models/user';
import { ref } from 'vue';

const currentUser = ref<User | null>(mockUser);
// const currentUser = ref<User | null>(null);

export function useCurrentUser() {
  const setUser = (user: User | null) => {
    currentUser.value = user;
  };
  return { currentUser, setUser };
}
