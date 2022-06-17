<template>
  <default-layout>
    <spinner v-if="loading"></spinner>
    <div v-else class="w-100">
      <user-list :users="users || []"></user-list>
    </div>

  </default-layout>
</template>

<script setup lang="ts">
import Spinner from '@/components/essentials/Spinner.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { useUsers } from '@/composables/users/useUsers';
import UserList from '@/components/fragments/UserList.vue';

const { users, loading } = useUsers();

</script>

<style scoped>
</style>