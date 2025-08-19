import {View, Text, Image} from "react-native-web";
import { useRoute } from "@react-navigation/native";
import styles from "./style";





export default function Detalhes() {

    const route = useRoute();


    return (
        
        <View style={styles.fundo}>
            <View>
                <Image source={{uri : `https://image.tmdb.org/t/p/original/${route.params.image}`}}  style={styles.movieImage}>
            </Image>

            </View>
            <Text style={styles.Titulos}> {route.params.titulo} </Text>
            <Text style={styles.infos}> Nota {route.params.nota} |  {route.params.lancamento}  </Text>
            <Text style={styles.Descricao}> {route.params.Descricao} </Text> 


        </View>
    )

}