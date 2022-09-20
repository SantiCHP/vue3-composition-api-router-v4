<script setup>
import { useRoute, useRouter } from "vue-router";
import { useGetData } from "@/composables/getData";
import { useFavoritesStore } from "@/stores/favorites";

const route = useRoute();
const router = useRouter();
const useFavorites = useFavoritesStore();

const { add, findPokemon } = useFavorites;

const { getData, data, loading, error } = useGetData();

const back = () => {
  router.push("/pokemons");
};

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
</script>

<template>
  <p v-if="loading">Cargando información</p>
  <div class="alert alert-danger mt-2" v-if="error">
    No es posible localizar el pokemon indicado
  </div>
  <div v-if="data">
    <img :alt="data.name" :src="data.sprites?.front_default" width="200" />
    <h1>Pokemon name: {{ $route.params.name }}</h1>
    <button
      :disabled="findPokemon(data.name)"
      class="btn btn-primary mb-2"
      @click="add(data)"
    >
      Add to favorites
    </button>
  </div>
  <button @click="back" class="btn btn-outline-primary">Back</button>
</template>
