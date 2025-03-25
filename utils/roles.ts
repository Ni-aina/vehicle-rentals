import { getdbUserByClerkId } from '@/app/actions/user.action'
import { Roles } from '@/types/globals'

export const checkRole = async (role: Roles) => {
  const { success, dbUser } = await getdbUserByClerkId();
  if (!success) return null;
  return dbUser?.role.some(permission => permission === role);
}