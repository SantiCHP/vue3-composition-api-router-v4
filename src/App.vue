<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
<nav class="navbar bg-light">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/" >
      <img
        class="d-inline-block align-text-top"
        alt=""
        height="24"
        src="@/assets/logo.svg"
        width="30"
      >
      Poke API
    </router-link>
    <div>
      <router-link active-class="active" class="btn btn-outline-primary me-2" to="/">Home</router-link>
      <router-link active-class="active" class="btn btn-outline-primary" to="/pokemons">Pokemons</router-link>
    </div>
  </div>
</nav>
<div class="container">
  <RouterView />
</div>
</template>