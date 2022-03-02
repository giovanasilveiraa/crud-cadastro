import React, { useContext } from 'react';
import { View, FlatList, Alert, StyleSheet } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import UsersContext from '../context/UsersContext';

export default props => {

    const { state, dispatch } = useContext(UsersContext)

    function deleteUser(user) {
        Alert.alert('Excluir usuário','Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress() {
                    dispatch({
                      type:'deleteUser',
                      payload: user,
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    const getUserItem = ({ item: user }) => (
        <ListItem
          style={style.list}
          bottomDivider
          onPress={() => props.navigation.navigate('User', user)}>
          <Avatar source={{ uri: user.avatarUrl }} />
          <ListItem.Content>
            <ListItem.Title>{user.name}</ListItem.Title>
            <ListItem.Subtitle>{user.Cpf}</ListItem.Subtitle>
            <ListItem.Subtitle>{user.nasc}</ListItem.Subtitle>
            <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron
            name="edit"
            size={25}
            color="#2e8b57"
            onPress={() => props.navigation.navigate('User', user)}
          />
          <ListItem.Chevron
            name="delete"
            size={25}
            color="#ff6347"
            onPress={() => deleteUser(user)}
          />
        </ListItem>
      );
    
      return (
        <View>
          <FlatList
            keyExtractor={(user) => user.id.toString()}
            data={state.users}
            renderItem={getUserItem}
          />
        </View>
      )
};

const style = StyleSheet.create({
  list : {
    marginTop :20,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  border : {
    borderRadius: 10,
  }
})
