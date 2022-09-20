import { ref } from 'vue';
import {defineStore} from 'pinia'

export const useFavoritesStore = defineStore('favorites', () => {

    //state
    const favorites = ref([]);

    if( localStorage.getItem('favorites')){
        favorites.value = JSON.parse(localStorage.getItem('favorites'))
    }

    //actions
    const add= (pokemon) => {
        favorites.value.push(pokemon);
        localStorage.setItem('favorites', JSON.stringify(favorites.value));
    };

    const remove = (id) => {
        favorites.value = favorites.value.filter( (item) => item.id !== id );
        localStorage.setItem('favorites', JSON.stringify(favorites.value));
    };

    const findPokemon = name => favorites.value.find( (item) => item.name === name );

    return {
        favorites,
        add,
        remove,
        findPokemon,
    }
})