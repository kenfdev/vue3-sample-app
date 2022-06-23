<template>
  <default-layout>
    <spinner v-if="isLoading"></spinner>
    <div v-else class="w-100">
      <user-list :users="users"></user-list>
      <div class="d-flex justify-center mt-8">
        <v-btn v-if="hasNextPage" @click="() => fetchNextPage()">Show More</v-btn>
      </div>
    </div>

  </default-layout>
</template>

<script setup lang="ts">
import Spinner from '@/components/essentials/Spinner.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { useUsers } from '@/composables/users/useUsers';
import UserList from '@/components/fragments/UserList.vue';
import { ref, watch } from 'vue';
import { User } from '@/shared/models/user';

const { data, isLoading, fetchNextPage, hasNextPage } = useUsers();

const users = ref<User[]>([]);

watch(data, () => {
  users.value = data.value?.pages.flatMap(page => page.data) || [];
})

</script>

<style scoped>
</style>