import {View,Image} from "react-native";
import React from 'react';
import styles from '../../../style.js';
import  Cabecalho from '../../componentes/cabecalho/index.js'
import Pesquisa from '../../componentes/pesquiza/index.js';
import Cartaz from '../../componentes/emcarta/index.js';
import Listaplana from '../../componentes/lista/index.js';
import DATA from "../../../movies.js";
import { FlatList } from "react-native-web";

export default function Home() {
    return (<View style={styles.container}>
      
       
       <Cabecalho></Cabecalho>

<Pesquisa></Pesquisa>

 <Cartaz></Cartaz>

<Image style={styles.imageBanner} source={require('../../../images/00.jpg')} />

<FlatList
            data={DATA}
            numColumns={2}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              
                <Listaplana titulo ={ item.nome} nota = {item.nota} imagem = {item.image}> </Listaplana>
            )}
        />

    </View>)


}

