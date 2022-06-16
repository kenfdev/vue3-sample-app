import { User } from '@/shared/models/user';
import { ref } from 'vue';

// const currentUser = ref<User | null>({
//   id: '366cc420-c1c5-43f4-841e-d9952bb1dbd1',
//   username: 'John Doe',
// });
const currentUser = ref<User | null>(null);

export function useCurrentUser() {
  const setUser = (user: User | null) => {
    currentUser.value = user;
  };
  return { currentUser, setUser };
}
