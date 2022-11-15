<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />
    <button class="btn btn-xs btn-green">Button</button>
    <button class="btn btn-2xl btn-green">Button</button>
  </header>

  <RouterView />
</template>
