import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    hero: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bloc: {
        alignItems: 'center',
        marginTop: 50,
    },
    content: {
        color: '#fff',
        alignItems: "center",
    },
    container: {
        flexDirection: 'column',
        color: '#fff',
        backgroundColor: '#424242'
    },
    h1: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    linkText: {
        color: 'blue',
        fontSize: 18,
        textDecorationLine: 'underline'
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 50,
        color: '#fff',
    },
    navBarTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    button: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor:'#3ea6ff',
        padding: 5,
        margin: 10
    },
    desc: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#fff',
    }
});