import React, { Component } from "react";
import { View, Text, Button, TouchableOpacity, Image, TextInput, FlatList, Modal, KeyboardAvoidingView, Dimensions, ScrollView } from "react-native";
import styleCss from './style.css';
import { useNavigation } from '@react-navigation/native'

import getProdutos from '../api/getProdutos'

export default class Pesquisa extends Component {

    state = {
        data: [],
        produtos: [],
        item: {},
        visible: false,
        valor: '',
        quantidade: '',
        produto: '',
        pesquisa: ''

    }

    componentDidMount() {
        this.carregaProdutos()
    }

    carregaProdutos = async () => {

        const response = await getProdutos.get('')
            .then((res) => {
                const arr = res.data
                arr.sort(function (a, b) {
                    return (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0);
                });
                this.setState({ data: arr, produtos: arr })
            })
            .catch((err) => alert(err))
    }

    onPressItem = (item) => {
        console.log(item)
    }

    pesquisa = (text) => {
        this.setState(state => {
            return {
                ...state,
                pesquisa: text,
                data: !text ? this.state.produtos
                    : this.state.produtos.filter(e => e.nome.toLocaleLowerCase().includes(text.toLocaleLowerCase()))
            }
        })
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                }}>
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            backgroundColor: '#e4e4e4',
                            alignItems: 'center',
                            borderRadius: 24,
                            flex: 1,
                            margin: 16,
                            padding: 8
                        }}
                        onPress={() => { }}>
                        <Image
                            style={{ height: 20, width: 20 }}
                            resizeMode="center"
                            source={require('../assets/search.png')}
                        />
                        <TextInput style={styleCss.searchText} placeholder={'Pesquisar'} value={this.state.pesquisa} onChangeText={(text) => { this.pesquisa(text) }} autoFocus></TextInput>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, padding: 16 }}>
                    <FlatList
                        data={this.state.data}
                        keyExtractor={item => item.id}
                        maxToRenderPerBatch={9}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity
                                    style={[
                                        styleCss.scrollItem,
                                    ]}
                                    onPress={() => { this.onPressItem(item) }}>
                                    <Text
                                        style={[
                                            styleCss.text,
                                            { marginRight: 16, flex: 1, fontSize: 14 },
                                        ]}>
                                        {`Produto: ${item.nome}`}
                                    </Text>
                                    <Text style={[styleCss.text, { flex: 1, alignSelf: 'center' }]}>
                                        {`Qtd: ${item.quantidade}`}
                                    </Text>
                                    <Text style={[styleCss.text, { alignSelf: 'flex-end' }]}>
                                        {`R$${item.preco.toFixed(2)}`}
                                    </Text>
                                </TouchableOpacity>
                            );
                        }}
                    />
                </View>
            </View >
        )
    }
}

