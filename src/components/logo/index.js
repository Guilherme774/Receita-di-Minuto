import { View, Text, StyleSheet } from 'react-native';


export function Logo() {
    return(
        <View style={styles.logoArea}>
            <Text style={styles.logoText}>Receita di Minuto</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    logoArea: {
        backgroundColor: '#4cbe6c',
        alignSelf: 'flex-start',
        padding: 12,
        paddingLeft: 20,
        paddingRight: 20,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 32,
        marginBottom: 10
    },

    logoText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    }
})