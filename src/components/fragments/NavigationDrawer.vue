<template>
  <v-navigation-drawer :model-value="isShow" @update:model-value="onShowChanged" temporary>
    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-home" title="Home" value="home" to="/" link></v-list-item>
      <v-list-item prepend-icon="mdi-account-multiple" title="Users" value="users" to="/users" link></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">

const { isShow } = defineProps<{ isShow: boolean }>();
const emit = defineEmits<{ (e: 'change', val: boolean): void }>();
const onShowChanged = (v: boolean) => emit('change', v);

</script>

<style scoped>
</style>