<script setup>
import { useFavoritesStore } from "@/stores/favorites";
import { storeToRefs } from "pinia";
import { RouterLink } from "vue-router";

const useFavorites = useFavoritesStore();

const { favorites } = storeToRefs(useFavorites);
const { remove } = useFavorites;
</script>

<template>
  <h1>Favorites</h1>
  <p v-if="favorites.length === 0">No favorites yet</p>
  <ul class="list-group" v-else>
    <li v-for="pokemon in favorites" :key="pokemon.id" class="list-group-item">
      <div>{{ pokemon.name }}</div>
      <div>
        <router-link class="btn btn-sm btn-primary me-2" :to="`/pokemons/${pokemon.name}`"
          >More info</router-link
        >
        <button @click="remove(pokemon.id)" class="btn btn-sm btn-danger">Delete</button>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
