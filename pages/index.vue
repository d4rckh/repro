<template>
  <div id="solvebit" class="mb-8 mt-5">
    <v-container align="center">
      <AnimationPop ref="roundPop">
        Some text
      </AnimationPop>
      <v-btn @click="roundPop.play()">Play Animation</v-btn>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const roundPop = ref();

</script>

<style>
</style>