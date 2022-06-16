<template>
  <v-menu open-on-hover location="top end">
    <template v-slot:activator="{ props }">
      <v-btn icon v-bind="props">
        <user-icon :user="user"></user-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item @click="item.onClick" v-for="(item, index) in menuItems" :key="index">
        <v-list-item-title>{{ item.label }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
import router from '@/router';
import { useLogout } from '@/composables/auth/useLogout';
import UserIcon from '../essentials/UserIcon.vue';

export interface UserMenuItem {
  label: string;
  onClick: () => void;
}

import { User } from '@/shared/models/user';

const { user } = defineProps<{ user: User | null }>();

const { logout } = useLogout();

const onLogout = async () => {
  logout();
  router.push('/login')
}

const menuItems: UserMenuItem[] = [
  { label: 'Logout', onClick: onLogout },
]

</script>

<style scoped>
</style>