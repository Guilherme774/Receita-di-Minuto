import AsyncStorage from '@react-native-async-storage/async-storage';


export async function getFavortites(key) {
    const favorites = await AsyncStorage.getItem(key);
    return JSON.parse(favorites) || [];
}


export async function saveFavorite(key, newItem) {
    let myFavorites = await getFavortites(key);

    let hasItem = myFavorites.some(item => item.id == newItem.id);

    if(hasItem) { 
        console.log('Item já favoritado');
        return;
    }

    myFavorites.push(newItem);

    await AsyncStorage.setItem(key, JSON.stringify(myFavorites));
    alert('Receita adicionada aos Favoritos!');
}


export async function removeFavorite(id) {
    let recipes = await getFavortites("@appreceitas");

    let myFavorites = recipes.filter( item => {
        return(item.id != id);
    });

    await AsyncStorage.setItem('@appreceitas', JSON.stringify(myFavorites));
    alert('Receita removida dos Favoritos!');
    return myFavorites;
}


export async function isFavorite(recipe) {
    let myRecipes = await getFavortites("@appreceitas");

    const favorite = myRecipes.find( item => item.id == recipe.id);

    if(favorite) return true;

    return false;
}