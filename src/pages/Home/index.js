import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';

import HomeBttn from '../../components/HomeBttn';

import logo from '../../assets/logo.png';

export default function App() {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 16, paddingTop: 20 }}>
                    <Image source={logo} style={{width: 48, height: 48, borderRadius: 8}} />
                    <Text style={styles.title}>FUEGO CHURRASRIA</Text>
                </View>
                <View style={styles.headline}>
                    <Text style={styles.headlineText}>VAMOS TE AJUDAR A MANDAR BRASA NO SEU CHURRASCO!</Text>
                    <View style={{ width: 75, height: 10, backgroundColor: '#EF233C'}}>
                        <Text></Text>
                    </View>
                </View>
                <View style={styles.bttns}>
                    <View style={styles.bttn}>
                        <HomeBttn tittle="Calcular Churrasco" link="Organizador" description="Saiba o gasto com suprimentos ao se preparar um churrasco"></HomeBttn>
                    </View>
                </View>
            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold'
    },

    headline: {
        marginTop: 32,
    },

    headlineText: {
        fontSize: 28,
        fontWeight: 'bold',
        width: '100%',
    },

    bttn: {
        marginTop: 5,
        paddingHorizontal: 13,
    },

    bttns: {
        paddingTop: 95,
    },
});
