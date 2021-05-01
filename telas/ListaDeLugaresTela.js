import React from 'react'
import { StyleSheet, Text, View , Platform, FlatList } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector } from 'react-redux';


import BotaoCabecalho from '../componentes/BotaoCabecalho'
import LugarItem from '../componentes/LugarItem';

import Cores from '../constantes/Cores';

const ListaDeLugaresTela = (props) => {
  const lugares = useSelector (estado => estado.lugares.lugares)
  return (
    <FlatList 
      data={lugares}
      keyExtractor={lugar => lugar.id}
      renderItem={lugar => (
          <LugarItem
            nomeLugar={lugar.item.titulo}
            onSelect={() => {
              props.navigation.navigate(
                'DetalhesDoLugar', 
                {tituloLugar: lugar.item.titulo, idLugar: lugar.id
              });
            }}
            imagem={lugar.item.imagemURI}
            endereco={lugar.item.endereco}  
          />
      )}
    />
  )
}

ListaDeLugaresTela.navigationOptions = dadosNav => {
  return {
    headerTitle: "Lista de lugares",
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={BotaoCabecalho}>
          <Item
            title="Adicionar"
            iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
            onPress={() => dadosNav.navigation.navigate ("NovoLugar")}
          />
        </HeaderButtons>
      )
    }
  }
}


export default ListaDeLugaresTela

const styles = StyleSheet.create({})
