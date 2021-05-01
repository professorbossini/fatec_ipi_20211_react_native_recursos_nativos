import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import Cores from '../constantes/Cores';
import * as ImagePicker from 'expo-image-picker';

const TiraFoto = (props) => {

  const [imagemURI, setImagemURI] = useState();

  //async await
  const tirarFoto = async () => {
    const foto = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect:[16,9],
      quality: 1
    });
    setImagemURI(foto.uri);
    props.onFotoTirada(foto.uri);
  }

  return (
    <View style={styles.principal}>
      <View style={styles.previewDaImagem}>
      {
        imagemURI ?
        <Image 
          style={styles.imagem} 
          source={{uri: imagemURI}}
        />
        :
        <Text>Nenhuma foto.</Text>
      }
      </View>
      <Button 
        title="Tirar foto"
        color={Cores.primary}
        onPress={() => {tirarFoto()}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  principal: {
    alignItems: 'center',
    marginBottom: 16
  },
  previewDaImagem: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    borderColor: "#CCC",
    borderWidth: 1
  },
  imagem: {
    width: '100%',
    height: '100%'
  }
})

export default TiraFoto;
