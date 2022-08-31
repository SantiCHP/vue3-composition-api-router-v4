<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
<nav class="navbar bg-dark navbar-dark">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/" >
      <img
        class="d-inline-block align-text-top"
        alt=""
        height="30"
        src="@/assets/p-logo.png"
      >
      Poke API
    </router-link>
    <div>
      <router-link active-class="active" class="btn btn-outline-primary me-2" to="/">Home</router-link>
      <router-link active-class="active" class="btn btn-outline-primary" to="/pokemons">Pokemons</router-link>
    </div>
  </div>
</nav>
<div class="container text-center">
  <RouterView />
</div>
</template>