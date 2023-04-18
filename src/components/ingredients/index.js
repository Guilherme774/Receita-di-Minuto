import { View, Text, StyleSheet } from "react-native";

export function Ingredients({ ingredient }) {
    return(
        <View style={styles.container}>
            <Text style={styles.name}>{ ingredient.name }</Text>
            <Text>{ ingredient.amount }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        borderBottomWidth: 2,
        borderBottomColor: '#E2E2E2'
    },

    name: {
        fontWeight: 500,
        fontSize: 16
    }
});