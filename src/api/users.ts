import { User } from '@/shared/models/user';
import axios from './client';

export async function getUsers(url: string): Promise<User[]> {
  const { data } = await axios.get<User[]>(url);
  return data;
}
