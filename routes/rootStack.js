import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import Post from '../screens/Post';
import { Icon } from 'react-native-elements';
import { StyleSheet} from 'react-native';
import Detail from '../screens/Detail';
const Stack = createStackNavigator();

const rootStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen}
                options={({navigation, route}) => ({
                    title: "Lista de Peliculas",
                    backgroundColor: 'blue',
                    headerRight: () => (
                        <Icon 
                            name="add"
                            style={styles.button} 
                            onPress={() => navigation.navigate('Create')}/>
                    )
                })}
            />
            <Stack.Screen name="Create" component={Post} />
            <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 13,
        borderRadius: 30,
        marginRight: 5,
        borderWidth: 1,
        borderColor: 'black'
    }
});

export default rootStack
