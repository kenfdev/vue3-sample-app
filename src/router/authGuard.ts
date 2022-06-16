import { useCurrentUser } from '@/composables/auth/useCurrentUser';
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

export const authenticationGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
): void => {
  const { currentUser } = useCurrentUser();
  if (!currentUser.value) {
    return next({
      path: '/login',
      query: {
        return: to.path,
      },
    });
  }

  next();
};
