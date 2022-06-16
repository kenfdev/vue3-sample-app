import { User } from '@/shared/models/user';

export async function login(): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: '366cc420-c1c5-43f4-841e-d9952bb1dbd1',
        username: 'John Doe',
      });
    }, 500);
  });
}
