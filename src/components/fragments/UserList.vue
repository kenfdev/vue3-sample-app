<template>
  <v-table>
    <thead>
      <tr>
        <th></th>
        <th class="text-left">
          Username
        </th>
        <th class="text-left">
          First Name
        </th>
        <th class="text-left">
          Last Name
        </th>
        <th class="text-left">
          Email
        </th>
        <th class="text-left">
          Phone
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="hoge" v-for="user in users" :key="user.id">
        <td>
          <user-icon :user="user" />
        </td>
        <td>{{ user.username }}</td>
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.phone }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
import { User } from '@/shared/models/user';
import UserIcon from '../essentials/UserIcon.vue';

const { users } = defineProps<{ users: User[] }>()

</script>

<style scoped>
td {
  padding-top: 10px !important;
  padding-bottom: 10px !important;
}
</style>