import { StyleSheet } from 'react-native';

const BUTTON_SIZE = 79;

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 80,
        backgroundColor: '#000', // needs to switch to white when button-switch is triggered
    },
    title: {
        fontSize: 18,
        marginBottom: 20,
        color: '#fff',
    },
    mainGrid: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    row: {
        flexDirection: 'row',
    },
    button: {
        width: BUTTON_SIZE,
        height: BUTTON_SIZE,
        margin: 3,
        backgroundColor: 'gray',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    equalButton: {
        height: BUTTON_SIZE * 2 + 6,
        backgroundColor: 'tomato',
    },
    zeroButton: {
        width: BUTTON_SIZE * 2 + 6,
        backgroundColor: 'tomato',
    },
    number: {
        color: 'white',
        fontSize: 25,
    },
    input: {
        color: '#fff',
        fontSize: 50,
        textAlign: 'right',
        marginBottom: 10,
        padding: 20,
    },
    // display: {
    //     backgroundColor: '#000',
    //     padding: 20,
    //     marginBottom: 10,
    // },
    
    // expressionText: {
    //     color: '#999',
    //     fontSize: 20,
    //     textAlign: 'right',
    //     minHeight: 25,
    // },
});
