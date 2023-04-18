import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';

import { FoodCard } from '../../components/food-card/index';
import { getFavortites } from '../../utils/storage';

export function Favorites() {
    const[recipes, setRecipes] = useState([]);
    const isFocused = useIsFocused();

    useEffect(()=> {
        let isActive = true;

        async function getRecipes() {
            const result = await getFavortites("@appreceitas");

            if(isActive) {
                setRecipes(result)
            }
        }

        if(isActive) getRecipes();


    }, [isFocused]);

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Receitas Favoritas</Text>

            { recipes.length === 0 && (
                <Text>Nenhuma receita favoritada.</Text>
            ) }


            <FlatList 
                showsVerticalScrollIndicator={false}
                style={{marginTop: 15}}
                data={recipes}
                keyExtractor={ (item) => String(item.id) }
                renderItem={ ({ item }) => <FoodCard data={item} />}
            />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f9ff',
        paddingStart: 15,
        paddingEnd: 15,
        paddingTop: 36
    },

    title: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 24
    }
})