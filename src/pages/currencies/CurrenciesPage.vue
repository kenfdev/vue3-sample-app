<template>
  <default-layout>
    <spinner v-if="isLoading"></spinner>
    <div v-else class="w-100">
      <currencies-graph :currencies="currencies"></currencies-graph>
    </div>
  </default-layout>
</template>

<script setup lang="ts">
import Spinner from '@/components/essentials/Spinner.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { useCurrencies } from '@/composables/currencies/useCurrencies';
import CurrenciesGraph from '@/components/fragments/CurrenciesGraph.vue';

const { currencies, isLoading, } = useCurrencies({});

</script>

<style scoped>
</style>