<template>
  <default-layout>
    <spinner v-if="isLoading"></spinner>
    <div v-else class="w-100">
      <div class="d-flex justify-end mt-8">
        <v-btn color="primary" @click="() => isShowModal = true">Add</v-btn>
      </div>
      <user-list :users="users"></user-list>
      <div class="d-flex justify-center mt-8">
        <v-btn v-if="hasNextPage" @click="() => fetchNextPage()">Show More</v-btn>
      </div>
    </div>
    <modal :is-show="isShowModal">
      <user-form @cancel="() => isShowModal = false" @submit="onSubmit" />
    </modal>
  </default-layout>
</template>

<script setup lang="ts">
import Spinner from '@/components/essentials/Spinner.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { useUsers } from '@/composables/users/useUsers';
import UserList from '@/components/fragments/UserList.vue';
import { ref } from 'vue';
import Modal from '@/components/fragments/Modal.vue';
import UserForm from '@/components/fragments/UserForm.vue';
import { useCreateUser } from '@/composables/users/useCreateUser';
import { UserCreateInput } from '@/api/users';

const { users, isLoading, fetchNextPage, hasNextPage } = useUsers();
const { mutateAsync } = useCreateUser();

const isShowModal = ref(false);

async function onSubmit(newUserInput: UserCreateInput) {
  try {
    await mutateAsync(newUserInput)
    isShowModal.value = false;
  } catch (e) {
    console.error(e);
  }
}

</script>

<style scoped>
</style>