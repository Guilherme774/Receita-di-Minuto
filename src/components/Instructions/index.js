import { View, Text, StyleSheet } from "react-native";


export function Instructions({ instruction, index }) {
    return(
        <View style={styles.container}>
            <Text style={styles.index}>{index + 1} - </Text>
            <Text style={styles.textInstruction}>{instruction.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 8,
        marginBottom: 15,
        width: '100%'
    },

    index: {
        fontWeight: 'bold',
        fontSize: 18
    },

    textInstruction: {
        lineHeight: 20
    }
})