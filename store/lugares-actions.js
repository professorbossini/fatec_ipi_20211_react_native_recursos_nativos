import * as FileSystem from 'expo-file-system';
export const ADD_LUGAR = 'ADD_LUGAR';

export const LISTA_LUGARES = 'LISTA_LUGARES';
import { inserirLugar, buscarLugares } from '../helpers/db';

export const listarLugares = () => {
  return async dispatch => {
    try{
      const resultadoDB = await buscarLugares();
      dispatch ({type: LISTA_LUGARES, lugares: resultadoDB.rows._array})
      //console.log(resultadoDB);
    }
    catch (erro){
      console.log(erro);
      throw erro;
    }
  }
}

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
}