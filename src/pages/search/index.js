import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useState, useEffect } from 'react';

import { FoodCard } from '../../components/food-card';
import api from '../../services/api';

export function Search() {
    const route = useRoute();
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        async function fetchRecipes() {
            const response = await api.get(`/foods?name_like=${route.params?.name}`);

            setRecipes(response.data);
        }

        fetchRecipes();
    }, []);

    return(
        <View style={styles.container}>
            <FlatList 
                showsVerticalScrollIndicator={false}
                style={{marginTop: 15}}
                data={recipes}
                keyExtractor={ (item) => String(item.id) }
                renderItem={ ({ item }) => <FoodCard data={item} />}
                ListEmptyComponent={ () => <Text style={styles.text}>Nenhuma receita encontrada.</Text> }
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f9ff',
        paddingStart: 15,
        paddingEnd: 15,
        paddingTop: 15
    },

    text: {
        fontSize: 16,
        fontWeight: 500
    }
})