import React, {useState} from 'react';
import {Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';



const App = () => {

    const [numero, setNumero] = useState(0)

    function handleNumero(){
        
        const novo_numero = Math.floor(Math.random() * 100)
        
        setNumero(novo_numero)
    }

    return(
    <SafeAreaView style={style.container}>
        <Text style={style.numero}>{numero}</Text>
        <TouchableOpacity onPress={handleNumero} style={style.botao}>
            <Text style={style.textoBotao}>Gerar Número</Text>
        </TouchableOpacity>
    </SafeAreaView>
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: '#FF0000',
        fontSize: 24,
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    numero: {
        fontSize: 120,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    botao: {
        backgroundColor: '#FFFFFF',
        width: '50%',
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoBotao: {
        fontWeight: 'bold',
        fontSize: 25,
    },
});


export default App;