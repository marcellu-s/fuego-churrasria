import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Calcular from '../pages/Calcular';
import Resumo from '../pages/Resumo';
import Formulario from '../pages/organizador/formulario';
import Maps from '../components/Maps';

const Stack = createNativeStackNavigator();

const Routes = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Calcular" component={Calcular} />
                <Stack.Screen name="Resumo" component={Resumo} />
                <Stack.Screen name="Maps" component={Maps} />
                <Stack.Screen name="Organizador" component={Formulario} />
            </Stack.Navigator>
        </NavigationContainer> 
    );
};

export default Routes;