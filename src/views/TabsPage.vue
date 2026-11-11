<template>
  <ion-tabs>
    <ion-router-outlet />
    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="home" href="/tabs/home">
        <ion-label>Home</ion-label>
      </ion-tab-button>
      <ion-tab-button tab="bmi" href="/tabs/bmi">
        <ion-label>BMI</ion-label>
      </ion-tab-button>
      <ion-tab-button tab="morse" href="/tabs/morse">
        <ion-label>Morse Code</ion-label>
      </ion-tab-button>
      <ion-tab-button tab="alcohol" href="/tabs/alcohol">
        <ion-label>Alcohol Age</ion-label>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</template>

<script setup lang="ts">
import { IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/vue';
</script>
