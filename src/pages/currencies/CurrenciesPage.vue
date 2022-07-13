<template>
  <default-layout>
    <spinner v-if="isLoading"></spinner>
    <div v-else class="w-100">
      {{ currencies }}
    </div>
  </default-layout>
</template>

<script setup lang="ts">
import Spinner from '@/components/essentials/Spinner.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { useCurrencies } from '@/composables/currencies/useCurrencies';

const { currencies, isLoading, } = useCurrencies({});

</script>

<style scoped>
</style>