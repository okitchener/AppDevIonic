<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Alcohol Age</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <form @submit.prevent="calculateDate">
        <ion-item>
          <ion-input
            v-model="birthDate"
            label="Date of birth"
            type="date"
            required
            @ion-input="
              result = '';
              error = '';
            "
          />
        </ion-item>
        <ion-button expand="block" type="submit">Calculate</ion-button>
      </form>

      <p v-if="result" aria-live="polite">{{ result }}</p>
      <ion-note v-if="error" color="danger">{{ error }}</ion-note>
      <ion-note>U.S. minimum purchasing age is 21. Check local laws.</ion-note>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonNote,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';

const birthDate = ref('');
const result = ref('');
const error = ref('');

function calculateDate() {
  const birthday = new Date(`${birthDate.value}T00:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (!birthDate.value || Number.isNaN(birthday.getTime()) || birthday > today) {
    error.value = 'Enter a valid date of birth that is not in the future.';
    result.value = '';
    return;
  }

  birthday.setFullYear(birthday.getFullYear() + 21);
  const date = birthday.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  result.value = birthday <= today ? `You turned 21 on ${date}.` : `You can buy alcohol on ${date}.`;
  error.value = '';
}
</script>

<style scoped>
ion-item {
  --padding-start: 0;
  margin-bottom: 1rem;
}

ion-button {
  margin: 1rem 0;
}
</style>
