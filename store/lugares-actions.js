import * as FileSystem from 'expo-file-system';
export const ADD_LUGAR = 'ADD_LUGAR';
import { inserirLugar } from '../helpers/db';

export const addLugar = (nomeLugar, imagem) => {
  return async (dispatch) => {
    const nomeArquivo = imagem.split("/").pop();
    const novoPath = FileSystem.documentDirectory + nomeArquivo;
    try{
      await FileSystem.moveAsync ({
        from: imagem,
        to: novoPath
      })
      const resultadoDB = await inserirLugar(
        nomeLugar,
        novoPath,
        'Paris',
        48.8584,
        2.2945  
      )
      console.log(resultadoDB);
      dispatch ({
        type: ADD_LUGAR,
        dadosLugar: { id: resultadoDB.insertId, nomeLugar: nomeLugar, imagem: novoPath}
      })      
    }
    catch (err){
      console.log(err);
      throw err;
    }
  }
  // return {
  //   type: ADD_LUGAR, dadosLugar: {nomeLugar: nomeLugar, imagem: imagem}
  // }
}