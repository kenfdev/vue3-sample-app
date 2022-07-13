<script setup lang="ts">

import NavigationDrawer from '@/components/fragments/NavigationDrawer.vue';
import UserMenu from '@/components/fragments/UserMenu.vue';
import { useCurrentUser } from '@/composables/auth/useCurrentUser';
import { ref } from 'vue';

const { currentUser } = useCurrentUser();
const showUserMenu = ref(false);
const showNavigation = ref(false);
const onShowNavigationChange = (v: boolean) => showNavigation.value = v;

showUserMenu.value = !!currentUser.value

</script>

<template>
  <v-app-bar color="primary">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="showNavigation = !showNavigation">
      </v-app-bar-nav-icon>
    </template>
    <template v-slot:append>
      <user-menu v-if="showUserMenu" :user="currentUser"></user-menu>
    </template>
  </v-app-bar>
  <v-main>
    <navigation-drawer :is-show="showNavigation" @change="onShowNavigationChange" />

    <div class="w-75 mx-auto">
      <div class="d-flex justify-center">
        <slot></slot>
      </div>
    </div>
  </v-main>
</template>