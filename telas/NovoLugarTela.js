import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native'
import Cores from '../constantes/Cores'

import { useDispatch } from 'react-redux';

import * as lugaresActions from '../store/lugares-actions';

import TiraFoto from '../componentes/TiraFoto';
import CapturaLocalizacao from '../componentes/CapturaLocalizacao';

const NovoLugarTela = (props) => {
  const dispatch = useDispatch();
  const [novoLugar, setNovoLugar] = useState('');
  const [imagemURI, setImagemURI] = useState('');
  const novoLugarAlterado = (texto) => {
    setNovoLugar(texto);
  }
  const adicionarLugar = () => {
    dispatch (lugaresActions.addLugar(novoLugar, imagemURI));
    props.navigation.goBack();
    //console.log("Adicionando lugar...");
  }
  const fotoTirada = (imagemURI) => {
    setImagemURI(imagemURI);
  }
  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.titulo}>Cadastrar novo lugar</Text>
        <TextInput  
          style={styles.textInput}
          value={novoLugar}
          onChangeText={novoLugarAlterado}
        />
        <TiraFoto onFotoTirada={fotoTirada}/>
        <CapturaLocalizacao />
        <Button 
          title="Salvar lugar"
          color={Cores.primary}
          onPress={() => adicionarLugar()}
        />
      </View>
    </ScrollView>
  )
}

export default NovoLugarTela

const styles = StyleSheet.create({

  form: {
    marginHorizontal: 40,
    marginTop: 20
  },
  titulo: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 16
  },
  textInput: {
    borderBottomColor: "#DDD",
    borderBottomWidth: 2,
    marginBottom: 8,
    padding: 12
  }
})
