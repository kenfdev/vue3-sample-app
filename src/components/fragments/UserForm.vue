<template>
  <v-card>
    <v-card-title>
      <span class="text-h5">User Profile</span>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field label="Username*" required v-model="username"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="First Name*" required v-model="firstName"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Last Name*" required v-model="lastName">
              </v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Email*" required v-model="email"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Phone*" type="tel" required v-model="phone"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
      <small>*indicates required field</small>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue-darken-1" text @click="() => $emit('cancel')">
        Close
      </v-btn>
      <v-btn color="blue-darken-1" text @click="onSubmit">
        Save
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { UserCreateInput } from '@/api/users';

const username = ref('')
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const phone = ref('')

const emit = defineEmits<{ (e: 'cancel'): void, (e: 'submit', user: UserCreateInput): void }>()

function onSubmit() {
  const userInput = { username: username.value, firstName: firstName.value, lastName: lastName.value, email: email.value, phone: phone.value };
  console.log(userInput)
  emit('submit', userInput)
}

</script>

<style scoped>
</style>