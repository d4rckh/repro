<template>
  <div>
    <span class="bg bg1"></span>
    <v-app>
      <NuxtLoadingIndicator
        color="#60fdff"
      />
      <!-- <v-no-ssr>
        <AppBar @drawer="toggleDrawer()"/>
        <AppDraw ref="appdrawer" />
      </v-no-ssr> -->
      <v-main><NuxtPage /></v-main>
      <AppFooter />
    </v-app>
  </div>
</template>

<script setup lang="ts">


useHead({
  meta: [
    { name: "theme-color", content: "#13141a" },
  ],
  title: 'Mathbits'
})
</script>

<style>
.bg {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-size: cover;
  transform: scale(1.1);
}
.bg1 {
  background: url('/wallpaper1.png') no-repeat center center;
}
</style>
