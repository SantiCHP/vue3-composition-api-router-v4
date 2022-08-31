<script setup>
import { RouterLink } from "vue-router";
import { useGetData } from "@/composables/getData";

const { data, getData, loading, error } = useGetData();

getData("https://pokeapi.co/api/v2/pokemon/");
</script>

<template>
    <h1>Pokemons</h1>
    
    <div class="btn-group my-2">
        <button
            :disabled = "!data.previous"
            class="btn btn-warning"
            style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;"
            @click="getData(data.previous)"
        >Previous</button>
        <button
            :disabled = "!data.next"
            class="btn btn-warning ms-2"
            style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;"
            @click="getData(data.next)"
        >Next</button>
    </div>
    <p v-if="loading">Cargando información...</p>
    <div class="alert alert-danger mt-2" v-if="error">{{error}}</div>
    <div v-if="data">
        <ul class="list-group">
            <li
              v-for="pokemon in data.results"
              :key="pokemon.name"
              class="list-group-item"
            >
                <router-link
                :to="`/pokemons/${pokemon.name}`"
                >
                    {{ pokemon.name }}
                </router-link>
            </li>
        </ul>
        <div class="btn-group my-2">
            <button
              :disabled = "!data.previous"
              class="btn btn-warning"
              style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;"
              @click="getData(data.previous)"
            >Previous</button>
            <button
              :disabled = "!data.next"
              class="btn btn-warning ms-2"
              style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;"
              @click="getData(data.next)"
            >Next</button>
        </div>
        
    </div>  
</template>
