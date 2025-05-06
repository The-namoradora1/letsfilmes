import {View, Text,Image} from "react-native";
import React from 'react';
import styles from '../../../style.js';
import  Cabecalho from '../../componentes/cabecalho/index.js'
import Pesquisa from '../../componentes/pesquiza/index.js';
import Cartaz from '../../componentes/emcarta/index.js';
import Listaplana from '../../componentes/lista/index.js';

export default function Home() {
    return (<View style={styles.container}>
      
       
       <Cabecalho></Cabecalho>

<Pesquisa></Pesquisa>

 <Cartaz></Cartaz>

<Image style={styles.imageBanner} source={require('../../../images/00.jpg')} />

<Listaplana></Listaplana>    
    </View>)


}

