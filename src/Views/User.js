import React, { useState, useContext } from 'react';
import { Text, View, TextInput, StyleSheet, Button } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import UsersContext from '../context/UsersContext'

export default ({route, navigation}) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(UsersContext)

    return (
       <View style={style.form}>
           <Text style={style.text}>Avatar</Text>
           <TextInput style={style.input}
                onChangeText={avatarUrl => setUser({...user, avatarUrl})}
                placeholder="Cole aqui o link do seu avatar"
                value={user.avatarUrl}
           />

           <Text style={style.text}>Nome</Text>
           <TextInput style={style.input}
                onChangeText={name => setUser({...user, name})}
                placeholder="Ex: Maria da Silva"
                value={user.name}
           />

           <Text style={style.text}>CPF</Text>
           <TextInputMask style={style.input}
                keyboardType="numeric"
                onChangeText={Cpf => setUser({...user, Cpf})}
                placeholder="Ex: 123.456.789-10"
                value={user.Cpf}
                type={'cpf'}
           />

           <Text style={style.text}>Data de Nascimento</Text>
           <TextInputMask style={style.input}
                keyboardType="numeric"
                onChangeText={nasc => setUser({...user, nasc})}
                placeholder="Ex: 12/02/1999"
                value={user.nasc}
                type={'custom'}
                options={{
                    mask: '99/99/9999'
                }}
           />

           <Text style={style.text}>Email</Text>
           <TextInput style={style.input}
                onChangeText={email => setUser({...user, email})}
                placeholder="Ex: mariasilva@gmail.com"
                value={user.email}
           />

            <Button 
                title="Salvar usuário"
                color="#4682B4"
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user,
                    })
                    navigation.goBack()
                }}
            />

       </View>
    )
}

const style = StyleSheet.create({

    form: {
        padding: 30,
    },
    input: {
        height: 40,
        width: 320,
        borderRadius: 5,
        marginBottom: 15,
        marginLeft: 10,
        backgroundColor: 'white',
        borderColor: '#000'
    },

    button: {
        height: 40,
        width: 320,
        borderRadius: 5,
        marginBottom: 15,
        marginLeft: 10,
        backgroundColor: '#E6E6FA',
    },
    
    text: {
        marginBottom: 9,
        marginLeft: 10,
        fontSize: 17,
        fontWeight: 'bold',
    }
})
