import React, { Component } from 'react';
import getProdutos from '../api/getProdutos'
import styleCss from './style.css';

import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default class Cadastro extends Component {

    state = {
        produto: '',
        quantidade: '',
        valor: ''
    }

    setProduto = async () => {
        const response = await getProdutos.post('', {
            Nome: this.state.produto,
            Quantidade: Number(this.state.quantidade),
            Preco: Number(this.state.valor)
        })
            .then(this.setState({ produto: '', quantidade: 0, valor: 0 }))
            .catch((err) => alert(err))
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ justifyContent: 'center' }}>
                    <Text style={[styleCss.text, { marginHorizontal: 16, paddingVertical: 6, marginTop: 45 }]}>
                        Nome do produto:
                    </Text>

                    <TextInput
                        style={styleCss.TextInput}
                        placeholder={'Insira o nome do produto'}
                        value={this.state.produto}
                        onChangeText={(text) => { this.setState({ produto: text }) }}
                        autoFocus>
                    </TextInput>

                    <Text style={[styleCss.text, { marginHorizontal: 16, paddingVertical: 6, }]}>
                        Quantidade:
                    </Text>

                    <TextInput
                        style={styleCss.TextInput}
                        placeholder={'Insira a quantidade do produto'}
                        keyboardType={'numeric'}
                        value={this.state.quantidade}
                        onChangeText={(text) => { this.setState({ quantidade: text }) }}
                        autoFocus>
                    </TextInput>

                    <Text style={[styleCss.text, { marginHorizontal: 16, paddingVertical: 6, }]}>
                        Valor:
                    </Text>

                    <TextInput
                        style={styleCss.TextInput}
                        placeholder={'Insira o valor do produto'}
                        keyboardType={'numeric'}
                        value={this.state.valor}
                        onChangeText={(text) => { this.setState({ valor: text }) }}
                        autoFocus>
                    </TextInput>

                    <TouchableOpacity
                        style={[styleCss.button, { marginTop: 80 }]}
                        onPress={() => { this.setProduto() }}>
                        <Text
                            style={[styleCss.text, { color: '#FFF', textAlign: 'center', fontSize: 20, }]}>
                            Confirmar
                        </Text>

                    </TouchableOpacity>

                </View>

            </View>

        )
    }
}