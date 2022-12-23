<template>
  <div :class="{ pop_animation: animating }" @animationend="animating = false">
    <slot />
  </div>
</template>

<script setup>
const animating = ref(false);

function play() {
  animating.value = true;
}

defineExpose({ play });
</script>

<style>
.pop_animation {
  -webkit-animation: pop 0.5s;
  animation: pop 0.5s;
}

@keyframes pop {
  0% {
    -webkit-transform: scale(3.5);
    transform: scale(3.5)
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1)
  }
}
</style>