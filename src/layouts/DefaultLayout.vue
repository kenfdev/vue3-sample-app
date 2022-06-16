<script setup lang="ts">

import UserMenu from '@/components/fragments/UserMenu.vue';
import { useCurrentUser } from '@/composables/auth/useCurrentUser';
import { ref } from 'vue';
const { currentUser } = useCurrentUser();
const showUserMenu = ref(false);

showUserMenu.value = !!currentUser.value

</script>

<template>
  <v-app-bar color="primary">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
    <template v-slot:append>
      <user-menu v-if="showUserMenu"></user-menu>
    </template>
  </v-app-bar>
  <v-main>
    <slot></slot>
  </v-main>
</template>