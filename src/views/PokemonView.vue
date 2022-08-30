<script setup>
import axios from "axios";
import { useRoute, useRouter } from "vue-router"
import { ref } from "vue"

const route = useRoute();
const router = useRouter();

const pokemon = ref({});

const back = () => {
    router.push('/pokemons');
}

const getData = async () => {
    try {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
        pokemon.value = data;
    } catch (error) {
        console.log(error);
        pokemon.value = null;
    }
}

getData();
</script>

<template>
    <div v-if="pokemon">
        <img
          :alt="pokemon.name"
          :src="pokemon.sprites?.front_default"
          width="200"
        />
        <h1>Pokemon name: {{ $route.params.name }}</h1>
    </div>
    <h1 v-else>El pokemon indicado no existe</h1>
    <button class="btn btn-outline-primary" @click="back">Volver</button>
</template>