import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import pino from '../../assets/icon.png';
import swift from '../../assets/logo_swift.png';
import { CHAVE } from '@env';
import { localidade } from '../../pages/Services';
const Maps = (cep) => {

    const [latitudeOrigem, setLatitudeOrigem] = useState(-23.648057335940447)
    const [longitudeOrigem, setLongitudeOrigem] = useState(-46.721278295962286)

    useEffect(() => {
        (async function () {

            fetch('https://maps.googleapis.com/maps/api/geocode/json?address='.concat(String(cep.cep)).concat('&region=BR&key=').concat(CHAVE)).then((response) => response.json()).
                then((json) => {
                    let geometry = json.results.map((i) => i.geometry.location);
                    let lat = geometry[0].lat;
                    let lgt = geometry[0].lng;
                    setLatitudeOrigem(lat);
                    setLongitudeOrigem(lgt)
    
    
                })
                .catch(error => {
                    console.error(error);
                });
        })();
    }, []);


    return (
        <View style={styles.container}>
            <MapView initialRegion={{ latitude: latitudeOrigem, longitude: longitudeOrigem, latitudeDelta: 0.100, longitudeDelta: 0.100, }} style={styles.mapaDimensao}>
                <Marker coordinate={{ latitude: latitudeOrigem, longitude: longitudeOrigem }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Image source={pino} style={styles.mapMarkerImage} />
                    </View>
                </Marker>
                {
                    localidade.map((coord) => {
                        return (
                            <Marker key={Math.random()} coordinate={{latitude: coord.latitude, longitude: coord.longitude }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <Image source={swift} style={styles.mapMarkerImage} />
                                </View>
                            </Marker>
                        )
                    })
                }

            </MapView>
        </View >
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    mapaDimensao: {
        width: '100%',
        height: '100%',
    },
    mapMarkerImage: {
        width: 30,
        height: 30,
    },
})

export default Maps;