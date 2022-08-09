<template>
  <default-layout>
    <spinner v-if="isLoading"></spinner>
    <div v-else class="w-100">
      <currencies-graph :currencies="currencies" :start-date="input.start" :end-date="input.end"
        @change-start-date="handleChangeStartDate" @change-end-date="handleChangeEndDate">
      </currencies-graph>
    </div>
  </default-layout>
</template>

<script setup lang="ts">
import Spinner from '@/components/essentials/Spinner.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { useCurrencies } from '@/composables/currencies/useCurrencies';
import CurrenciesGraph from '@/components/fragments/CurrenciesGraph.vue';
import { reactive } from 'vue';

const input = reactive({ start: '', end: '' })
const { currencies, isLoading, } = useCurrencies(input);

const handleChangeStartDate = (v: string) => input.start = v;
const handleChangeEndDate = (v: string) => input.end = v;

</script>

<style scoped>
</style>