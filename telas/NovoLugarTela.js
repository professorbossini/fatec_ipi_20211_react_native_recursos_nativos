import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native'
import Cores from '../constantes/Cores'

import { useDispatch } from 'react-redux';

import * as lugaresActions from '../store/lugares-actions';

const NovoLugarTela = (props) => {
  const dispatch = useDispatch();
  const [novoLugar, setNovoLugar] = useState('');
  const novoLugarAlterado = (texto) => {
    setNovoLugar(texto);
  }
  const adicionarLugar = () => {
    dispatch (lugaresActions.addLugar(novoLugar));
    props.navigation.goBack();
    //console.log("Adicionando lugar...");
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
