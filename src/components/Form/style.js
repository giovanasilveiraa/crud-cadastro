import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    homeContext: {
        width: '90%',
        height: '87%',
        bottom: 0,
        backgroundColor: '#E6E6FA',
        alignItems: 'flex-start',
        padding: 25,
        marginLeft: 20,
        justifyContent: 'space-between',
        display: 'flex',
        borderRadius: 10,
    },

    textContext: {
        fontSize: 20,
        marginLeft: 5,
        marginTop: 15,

    },

    inputContext: {
        marginLeft: 5,
        height: 40,
        width: 290,
        margin: 12,
        borderWidth: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor:'#000000'
    },

    image: {
        width: 90,
        height: 90,
        marginLeft: 100,
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        backgroundColor: '#E6E6FA',
        color: '#E6E6FA',
        height: 100,
    },
});

export default styles