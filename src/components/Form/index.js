import React from "react";
import { View, Text, TextInput, Button, Image, Alert } from 'react-native';
import SweetAlert from 'react-native-sweet-alert';
import Button from ''
import styles from './style';


export default function Form(){
    return(
        <View style={styles.homeContext}>
            <View>
                <Image style={styles.image} source={require('../Form/assets/user.png')}/>
                <Text style={styles.textContext}>Nome</Text>
                <TextInput style={styles.inputContext} placeholder="Ex: Maria da Silva"/>
            
                <Text style={styles.textContext}>Cpf</Text>
                <TextInput  style={styles.inputContext} placeholder="Ex: 123.456.789-10"
                           keyboardType="numeric"/>
            
                <Text style={styles.textContext}>Data de Nascimento</Text>
                <TextInput style={styles.inputContext} placeholder="Ex: 12/12/2012"
                           keyboardType="numeric"/>
                
                <Text style={styles.textContext}>Email</Text>
                <TextInput style={styles.inputContext} placeholder="Ex: mariasilva@gmail.com"/>
                        
            </View>
           <Button/>
        </View>
    );
}