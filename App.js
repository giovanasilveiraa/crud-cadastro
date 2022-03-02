import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Icon } from 'react-native-elements';
import Userlist from './src/Views/UserList';
import User from './src/Views/User';
import { UsersProvider } from './src/context/UsersContext';

const Stack = createNativeStackNavigator()

export default props => {
    return (    
      <UsersProvider>
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
                            icon={<Icon name="add" size={25} color="black" />}
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
      </UsersProvider>
    )
}
const style = StyleSheet.create({
  title : {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 50
  }
})

const screenOptions = {
  headerStyle: {
    backgroundColor: '#E6E6FA',
  },
  headerTintColor: '#000',
  headerTitleStyle: {
    fontWeight: 'bold',
  }
}