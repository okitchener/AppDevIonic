<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Morse Code Translator</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-text>
        <h1>Translate text to Morse code</h1>
        <p>Enter letters, numbers, or punctuation to see their Morse code.</p>
      </ion-text>

      <ion-item class="text-input">
        <ion-textarea
          v-model="text"
          label="Text to translate"
          label-placement="stacked"
          placeholder="Try: Hello, world!"
          :auto-grow="true"
          :rows="4"
          aria-describedby="morse-help"
        />
      </ion-item>
      <ion-note id="morse-help">Letters are separated by spaces and words by /.</ion-note>

      <section class="translation" aria-labelledby="translation-title">
        <div class="translation-heading">
          <h2 id="translation-title">Morse code</h2>
          <ion-button v-if="text" fill="clear" size="small" @click="text = ''"> Clear </ion-button>
        </div>
        <p class="output" aria-live="polite">
          {{ translation || 'Your translation will appear here.' }}
        </p>
      </section>

      <ion-note v-if="unsupportedCharacters.length" color="warning">
        Not translated: {{ unsupportedCharacters.join(' ') }}
      </ion-note>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonNote,
  IonPage,
  IonText,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';

const morseCode: Record<string, string> = {
  A: '.-',
  B: '-...',
  C: '-.-.',
  D: '-..',
  E: '.',
  F: '..-.',
  G: '--.',
  H: '....',
  I: '..',
  J: '.---',
  K: '-.-',
  L: '.-..',
  M: '--',
  N: '-.',
  O: '---',
  P: '.--.',
  Q: '--.-',
  R: '.-.',
  S: '...',
  T: '-',
  U: '..-',
  V: '...-',
  W: '.--',
  X: '-..-',
  Y: '-.--',
  Z: '--..',
  '0': '-----',
  '1': '.----',
  '2': '..---',
  '3': '...--',
  '4': '....-',
  '5': '.....',
  '6': '-....',
  '7': '--...',
  '8': '---..',
  '9': '----.',
  '.': '.-.-.-',
  ',': '--..--',
  '?': '..--..',
  "'": '.----.',
  '!': '-.-.--',
  '/': '-..-.',
  '(': '-.--.',
  ')': '-.--.-',
  '&': '.-...',
  ':': '---...',
  ';': '-.-.-.',
  '=': '-...-',
  '+': '.-.-.',
  '-': '-....-',
  _: '..--.-',
  '"': '.-..-.',
  $: '...-..-',
  '@': '.--.-.',
};

const text = ref('');

const unsupportedCharacters = computed(() => {
  const unsupported = new Set<string>();

  for (const character of text.value) {
    if (!/\s/.test(character) && !morseCode[character.toUpperCase()]) {
      unsupported.add(character);
    }
  }

  return [...unsupported];
});

const translation = computed(() =>
  text.value
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) =>
      [...word]
        .map((character) => morseCode[character.toUpperCase()])
        .filter(Boolean)
        .join(' '),
    )
    .filter(Boolean)
    .join(' / '),
);
</script>

<style scoped>
h1 {
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
}

.text-input {
  margin: 1.5rem 0 0.5rem;
  --padding-start: 0;
}

.translation {
  margin: 2rem 0 1rem;
}

.translation-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

h2 {
  font-size: 1.1rem;
  margin: 0;
}

.output {
  min-height: 3rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background: var(--ion-color-light);
  color: var(--ion-color-dark);
  font-family: monospace;
  line-height: 1.6;
  overflow-wrap: anywhere;
}
</style>
