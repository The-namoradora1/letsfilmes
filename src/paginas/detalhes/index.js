import {View, Text, Image} from "react-native-web";
import { useRoute } from "@react-navigation/native";
import styles from "./style";





export default function Detalhes() {

    const route = useRoute();


    return (
        
        <View style={styles.fundo}>
            <View>
                <Image source={route.params.imagem} style={styles.movieImage}>
            </Image>

            </View>
            <Text style={styles.Titulos}> {route.params.titulo} </Text>
            <Text style={styles.infos}> Nota {route.params.nota} | Categoria: {route.params.categoria} | Duração: {route.params.duracao}</Text>
            <Text style={styles.Descricao}>{route.params.descricao}</Text> 


        </View>
    )

}