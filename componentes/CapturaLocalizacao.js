import React, { useState } from 'react'
import { 
  ActivityIndicator,
  Alert,
  Button,
  StyleSheet, 
  Text, 
  View
 } from 'react-native'
import Cores from '../constantes/Cores'
import PreviewDoMapa from './PreviewDoMapa';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const CapturaLocalizacao = (props) => {

  const[estaCapturando, setEstaCapturando] = useState(false);
  const[localizacaoSelecionada, setLocalizacaoSelecionada] = useState();

  const verificarPermissoes = async () => {
    const resultado = await Permissions.askAsync(Permissions.LOCATION);
    if (resultado.status !== 'granted'){
      Alert.alert(
        'Sem permissão para uso do mecanismo de localização',
        'É preciso liberar acesso ao mecanismo de localização',
        [{ text: "Ok"}]
      );
      return false;
    }
    return true;
  }
  const capturarLocalizacao = async () => {
    const temPermissao = await verificarPermissoes();
    if (temPermissao){
      setEstaCapturando(true);
      try{
        const localizacao = await Location.getCurrentPositionAsync({timeout: 8000})
        console.log(localizacao);
        setLocalizacaoSelecionada({
          lat: localizacao.coords.latitude,
          lng: localizacao.coords.longitude
        });
       
      }
      catch (erro){
        Alert.alert(
          'Impossível obter a localização',
          'Tente novamente mais tarde ou escolha uma no mapa',
          [{text: "OK"}]
        )
      }
    }
    setEstaCapturando(false);
  };
  return (
    <View style={styles.capturaLocalizacao}>
      <PreviewDoMapa 
        style={styles.previewDoMapa}
        localizacao={localizacaoSelecionada}
      >
      {
          estaCapturando ? 
          <ActivityIndicator 
            size="large"
            color={Cores.primary}
          /> 
          : <Text>Nenhuma localização disponível.</Text>
      }        
      </PreviewDoMapa>
      <Button 
        title="Obter localização"
        color={Cores.primary}
        onPress={() =>capturarLocalizacao()}
      />
    </View>
  )
}

export default CapturaLocalizacao

const styles = StyleSheet.create({
  capturaLocalizacao: {
    marginBottom: 16
  },
  previewDoMapa: {
    marginBottom: 12,
    width: '100%',
    height: 150,
    borderColor: '#DDD',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
