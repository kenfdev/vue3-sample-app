import { User } from '@/shared/models/user';

export const mockUser: User = {
  id: '40d36103-9539-4301-9ecf-bd83ef01c72f',
  email: 'narong-luo@mac.dev',
  firstName: 'Narong',
  lastName: 'Luo',
  phone: '+387 17 59559',
  img: null,
  username: 'Narong_Luo',
};

export async function login(): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUser);
    }, 500);
  });
}
