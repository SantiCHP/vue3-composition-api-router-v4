<script setup>
import { useFavoritesStore } from "@/stores/favorites";
import { storeToRefs } from "pinia";

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
        <button @click="remove(pokemon.id)" class="btn btn-sm btn-danger">Delete</button>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
