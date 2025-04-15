import React from 'react';
import { View, Image,} from "react-native";
import styles from './style';
import  Cabecalho from './src/componentes/cabecalho/index.js'
import Pesquisa from './src/componentes/pesquiza/index.js';
import Cartaz from './src/componentes/emcarta/index.js';
import Listaplana from './src/componentes/lista/index.js';

export default function App() {
  return (
    <View style={styles.container}>

        <Cabecalho></Cabecalho>

       <Pesquisa></Pesquisa>

        <Cartaz></Cartaz>

      <Image style={styles.imageBanner} source={require('./images/00.jpg')} />
      
      <Listaplana></Listaplana>
        
      
    </View>
  );
}
