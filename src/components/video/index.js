import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from "react-native";
import { WebView } from 'react-native-webview'
import { Feather } from '@expo/vector-icons';


export function VideoView({ handleClose, videoUrl }) {
    return(
        <>
            <SafeAreaView>
                <TouchableOpacity style={styles.backButton} onPress={handleClose}>
                    <Feather name="arrow-left" size={24} color='#fff' />
                    <Text style={styles.backText}>Voltar</Text>
                </TouchableOpacity>
            </SafeAreaView>    

            <WebView
                style={styles.contentView}
                source={{ uri: videoUrl }}
            />
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },

    backButton: {
        width: '100%',
        backgroundColor: '#4cbe6c',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingStart: 15
    },

    backText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 500,
        marginLeft: 15
    },

    contentView: {
        flex: 1,
        width: '100%'
    }
})