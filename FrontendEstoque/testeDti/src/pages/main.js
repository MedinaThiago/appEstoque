import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import getProdutos from "../api/getProdutos";
import { useNavigation } from "@react-navigation/native";
import styleCss from './style.css';

export default () => {
    const [data, setData] = useState([]);

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: "space-evenly" }}>
            <TouchableOpacity
                style={[styleCss.button, { marginTop: 80 }]}
                onPress={() => navigation.navigate("Cadastro")}
            >
                <Text
                    style={[
                        styleCss.text,
                        { color: "#FFF", textAlign: "center", fontSize: 20 },
                    ]}
                >
                    Cadastrar Produto
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styleCss.button, { marginTop: 80 }]}
                onPress={() => navigation.navigate("Pesquisa")}
            >
                <Text
                    style={[
                        styleCss.text,
                        { color: "#FFF", textAlign: "center", fontSize: 20 },
                    ]}
                >
                    Consultar/Editar Produto
        </Text>
            </TouchableOpacity>
        </View>
    );
}