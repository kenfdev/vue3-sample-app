<template>
  <default-layout>
    <v-container class="fill-height">
      <v-row align-content="center" justify="center" class="fill-height">
        <v-btn :disabled="loading" color="primary" @click="onLogin">Login</v-btn>
      </v-row>
    </v-container>
  </default-layout>
</template>

<script setup lang="ts">
import { useLogin } from '@/composables/auth/useLogin';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import router from '@/router';
import { useRoute } from 'vue-router';

const { loading, login } = useLogin();
const { query } = useRoute();

const onLogin = async () => {
  await login();

  const to = query.return as string || '/';
  router.push(to)
}

</script>

<style scoped>
</style>