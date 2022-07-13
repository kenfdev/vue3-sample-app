<template>
  <v-row justify="center">
    <v-dialog v-model="isShow" persistent>
      <slot></slot>
    </v-dialog>
  </v-row>
</template>

<script setup lang="ts">

const { isShow } = defineProps<{ isShow: boolean }>()

</script>

<style scoped>
</style>