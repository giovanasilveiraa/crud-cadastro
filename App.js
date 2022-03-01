import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Icon } from 'react-native-elements';
import Userlist from './src/Views/UserList';
import User from './src/Views/User';

const Stack = createNativeStackNavigator()

export default props => {
    return (    
        <NavigationContainer>
            <Stack.Navigator inicialRoutName="UserList"
                             screenOptions={screenOptions}>
                            
                <Stack.Screen
                    name="UserList"
                    component={Userlist}
                    options={({ navigation }) => {
                      return {
                        title: "MedClin",
                        headerRight: () => (
                          <Button
                            onPress={() => navigation.navigate("User")}
                            type="clear"
                            icon={<Icon name="add" size={25} color="white" />}
                          />
                        )
                      }
                    }}
                />

            <Stack.Screen
                    name="User"
                    component={User}
                    options={{
                      title: "Formulário de cadastro"
                    }}
            />
            
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const screenOptions = {
  headerStyle: {
    backgroundColor: '#E6E6FA'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  }
}