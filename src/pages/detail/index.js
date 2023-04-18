import { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, Image, Modal, Share } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Ionicons, AntDesign, Feather } from '@expo/vector-icons';

import { Ingredients } from '../../components/ingredients';
import { Instructions } from '../../components/Instructions';
import { VideoView } from '../../components/video';

import { isFavorite, saveFavorite, removeFavorite } from '../../utils/storage';

export function Detail() {
    const route = useRoute();
    const navigation = useNavigation();

    const [showVideo, setShowVideo] = useState(false);
    const [favorite, setFavorite] = useState(false);

    useLayoutEffect(() => {

        async function getStatusFavorite() {
            const recipeFavorite = await isFavorite(route.params?.receita);
            setFavorite(recipeFavorite);
        }

        getStatusFavorite();

        navigation.setOptions({
            title: route.params?.receita ? route.params?.receita.name : 'Detalhes da Receita',
            headerRight: () => {
                return(
                    <Pressable onPress={ () => handleFavoriteRecipe(route.params?.receita) }>
                        {
                            favorite ? (
                                <Ionicons name="heart" color="#ff4141" size={28} />
                            ) :
                            (
                                <Ionicons name="heart-outline" color="#ff4141" size={28} />
                            )
                        }
                        
                    </Pressable>
                )
            }
        });
    }, [navigation, route.params?.receita, favorite]);

    async function handleFavoriteRecipe(recipe) {
        if(favorite) {
            await removeFavorite(recipe.id);
            setFavorite(false);
        }
        else {
            await saveFavorite('@appreceitas', recipe);
            setFavorite(true);
        }
    }

    function handleIOpenVideo() {
        setShowVideo(true);
    }

    async function shareRecipe() {
        try {
            await Share.share({
                uri: 'https://google.com',
                message: `Olha só essa receita de ${route.params?.receita.name} que vi lá no app Receita di Minuto!`
            })
        } 
        catch (error) {
            console.log(error)    
        }
    }

    return(
        <ScrollView contentContainerStyle={{ paddingBottom: 15 }} style={styles.container} showsVerticalScrollIndicator={false}>
            <Pressable onPress={handleIOpenVideo}>
                <View style={styles.playIcon}>
                    <AntDesign name='playcircleo' size={48} color="#fafafa" />
                </View>
                <Image 
                    source={{ uri: route.params?.receita.cover }}
                    style={styles.cover}
                />
            </Pressable>


            <View style={styles.headerDetails}>
                <View>
                    <Text style={styles.title}>{ route.params?.receita.name }</Text>
                    <Text style={styles.ingredientsText}>Ingredientes: ({ route.params?.receita.total_ingredients })</Text>
                </View>

                <Pressable onPress={shareRecipe}>
                    <Feather name='share-2' size={24} color='#121212' />
                </Pressable>
            </View>


            {route.params?.receita.ingredients.map(( item ) => (
                <Ingredients key={item.id} ingredient={item} />
            ))}

            
            <View style={styles.instructionsArea}>
                <Text style={styles.instructionsText}>Modo de Preparo</Text>
                <Feather name='arrow-down' size={24} color='#fff' />
            </View>

            {route.params?.receita.instructions.map(( item, index ) => (
                <Instructions key={item.id} instruction={item} index={index} />
            ))}
            

            <Modal visible={showVideo} animationType='slide'>
                <VideoView 
                    handleClose={() => setShowVideo(false)}
                    videoUrl={route.params?.receita.video}
                />
            </Modal>

        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f3f9ff',
        paddingTop: 15,
        paddingEnd: 15,
        paddingStart: 15
    },

    cover: {
        height: 200,
        width: '100%',
        borderRadius: 15
    },

    playIcon: {
        position: 'absolute',
        zIndex: 9,
        top: 0, left: 0, right: 0, bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },

    headerDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },

    title: {
        fontSize: 18,
        marginTop: 15,
        fontWeight: 'bold',
        marginBottom: 5
    },

    ingredientsText: {
        marginBottom: 15,
        fontSize: 16
    },

    instructionsArea: {
        backgroundColor: '#4cbe6c',
        flexDirection: 'row',
        padding: 8,
        borderRadius: 5,
        marginBottom: 15,
    },

    instructionsText: {
        fontSize: 18,
        fontWeight: 500,
        color: '#fff',
        marginRight: 10
    }
})