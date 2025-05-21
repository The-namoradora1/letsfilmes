import {View, Text, Image} from "react-native-web";
import { useRoute } from "@react-navigation/native";
import styles from "./style";


export default function Detalhes() {

    const route = useRoute();

    return (
        <View>
            <View>
                <Image source={route.params.imagem} style={styles.movieImage}>
            </Image>

            </View>
            <Text style={styles.Titulos}> {route.params.titulo}  </Text>
            <Text>Nota: {route.params.nota}</Text>

            <Text style={styles.descricao}>
                Descrição:{route.params.descricao}
            </Text>
            <Text style={styles.categoria}> </Text>
           <Text style={styles.duracao}> </Text>
        </View>
    )

}