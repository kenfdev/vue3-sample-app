<template>
  <v-avatar v-if="user?.img">
    <v-img :src="user.img" alt="John"></v-img>
  </v-avatar>
  <v-avatar v-else color="red">
    <span class="text-white text-h5">{{ userInitials }}</span>
  </v-avatar>

</template>

<script setup lang="ts">
import { User } from '@/shared/models/user';

const { user } = defineProps<{ user: User | null }>();

const userInitials = `${user?.firstName[0]}${user?.lastName[0]}`;

</script>

<style scoped>
</style>