import React from 'react'
import { StyleSheet, Text, View , Platform } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import Cores from '../constantes/Cores'

import BotaoCabecalho from '../componentes/BotaoCabecalho'

const ListaDeLugaresTela = () => {
  return (
    <View>
      <Text>ListaDeLugaresTela</Text>
    </View>
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
