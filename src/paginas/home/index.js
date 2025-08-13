import {View,Image} from "react-native";
import React from 'react';
import styles from '../../../style.js';
import  Cabecalho from '../../componentes/cabecalho/index.js'
import Pesquisa from '../../componentes/pesquiza/index.js';
import Cartaz from '../../componentes/emcarta/index.js';
import Listaplana from '../../componentes/lista/index.js';
import DATA from "../../../movies.js";
import { FlatList } from "react-native-web";
import { useState, useEffect } from "react";

export default function Home() {

    const[movies,setMovies]= useState([]);
    useEffect(()=>{

        async function buscarFilmes() {
              
      const url = 'https://api.themoviedb.org/3/movie/top_rated?language=pt-br-US&page=1';
            const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzU5MDUzNDk1MmFhMzdkZjljZjY3ZGMxM2YyM2I3OSIsIm5iZiI6MTc1NTAyMTU1MC45NDU5OTk5LCJzdWIiOiI2ODliODBlZWQwNmZhMzQzNTkyNjg0OWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.6og3MATogNpCnyBEPjSoiHYhztCr_TqrCBQgIu9LfH8'}
}

  const response =await fetch(url,options);
  const data = await response.json();
  console.log(data);

  setMovies(data.results);

};

buscarFilmes();


})



    return (<View style={styles.container}>
      
       
       <Cabecalho></Cabecalho>

<Pesquisa></Pesquisa>

 <Cartaz></Cartaz>

<Image style={styles.imageBanner} source={require('../../../images/00.jpg')} />

<FlatList
            data={movies}
            numColumns={2}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              
                <Listaplana titulo ={ item.title} nota = {item.vote_average} image = {item.poster_path} > </Listaplana>
            )}
        />

    </View>)


}

