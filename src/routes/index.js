import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../pages/Welcome';
import SignIn from '../pages/SignIn';
import App2 from '../pages/App2';
import Pix from '../pages/Pix';
import Payment from '../pages/Payment';
import PaymentConfirmation from '../pages/PaymentConfirmation';
import PixEnviado from '../pages/PixEnviado';
import Home from '../pages/Home';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='Welcome'
            component={Welcome}
            options={{ headerShown: false }}
        />
          <Stack.Screen
            name='SignIn'
            component={SignIn}
            options={{ headerShown: false }}
        />

        <Stack.Screen
            name='App2'
            component={App2}
            options={{ headerShown: false }}
        />

        <Stack.Screen
            name='Pix'
            component={Pix}
            options={{ headerShown: false }}
        />

        <Stack.Screen
            name='Payment'
            component={Payment}
            options={{ headerShown: false }}
        />

        <Stack.Screen
            name='PaymentConfirmation'
            component={PaymentConfirmation}
            options={{ headerShown: false }}
        />

        <Stack.Screen
            name='PixEnviado'
            component={PixEnviado}
            options={{ headerShown: false }}
        />

    <Stack.Screen
            name='Home'
            component={Home}
            options={{ headerShown: false }}
        />
        
        </Stack.Navigator>
    )
}