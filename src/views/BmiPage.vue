<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>BMI Calculator</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <form @submit.prevent="calculateBmi">
        <ion-item>
          <ion-input v-model="height" label="Height (cm)" type="number" min="1" required @ion-input="result = ''" />
        </ion-item>
        <ion-item>
          <ion-input v-model="weight" label="Weight (kg)" type="number" min="1" required @ion-input="result = ''" />
        </ion-item>
        <ion-button expand="block" type="submit">Calculate</ion-button>
      </form>

      <p v-if="result" aria-live="polite">BMI: {{ result }}</p>
      <ion-note v-if="error" color="danger">{{ error }}</ion-note>
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

const height = ref('');
const weight = ref('');
const result = ref('');
const error = ref('');

function calculateBmi() {
  const heightInMeters = Number(height.value) / 100;
  const bmi = Number(weight.value) / heightInMeters ** 2;

  if (!Number.isFinite(bmi) || bmi <= 0) {
    result.value = '';
    error.value = 'Enter a valid height and weight.';
    return;
  }

  const category = bmi < 18.5 ? 'Underweight' : bmi < 25 ? 'Normal weight' : bmi < 30 ? 'Overweight' : 'Obesity';

  result.value = `${bmi.toFixed(1)} — ${category}`;
  error.value = '';
}
</script>

<style scoped>
ion-item {
  --padding-start: 0;
  margin-bottom: 1rem;
}

ion-button {
  margin-top: 1rem;
}
</style>
