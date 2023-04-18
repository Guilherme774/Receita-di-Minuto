import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
import { useNavigation } from '@react-navigation/native';


export function FoodCard({ data }) {

    const navigation = useNavigation();

    function handleNavigate() {
        navigation.navigate('Detail', { receita: data });
    }

    return(
        <TouchableOpacity activeOpacity={0.9} style={styles.container} onPress={handleNavigate}>
            <Image 
                source={{ uri: data.cover }}
                style={styles.cover}
            />

            <View style={styles.info}>
                <Text style={styles.title}>{ data.name }</Text>
                <Text style={styles.details}>{ data.total_ingredients } ingredientes | { data.time }mins</Text>
            </View>

            <LinearGradient 
                style={styles.gradient}
                colors={['transparent', 'rgba(0, 0, 0,0.7)', 'rgba(0, 0, 0, 0.95)']}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15
    },

    cover: {
        width: '100%',
        height: 200,
        borderRadius: 15
    },

    info: {
        position: 'absolute',
        bottom: 15,
        left: 15,
        zIndex: 99
    },

    title: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },

    details: {
        color: '#fff'
    },

    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '55%',
        borderRadius: 14,
        zIndex: 1,
        backgroundColor: 'transparent'
    }
})