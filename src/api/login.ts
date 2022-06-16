import { User } from '@/shared/models/user';

export async function login(): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: '40d36103-9539-4301-9ecf-bd83ef01c72f',
        email: 'narong-luo@mac.dev',
        firstName: 'Narong',
        lastName: 'Luo',
        phone: '+387 17 59559',
        img: 'https://i.pravatar.cc/100',
        username: 'Narong_Luo',
      });
    }, 500);
  });
}
