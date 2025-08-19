import { Text, TextInput,TouchableOpacity, View, FlatList, Image } from "react-native-web";
import { useNavigation } from "@react-navigation/native";
import styles from "./stilo.js";


export default function Listaplana({titulo, Descricao, duracao, lancamento, nota, image}) {

    const navigation = useNavigation();

    return (

      <TouchableOpacity style={styles.butao} onPress = {() => navigation.navigate('Detalhes', {titulo, Descricao, duracao, lancamento, nota, image})}>
      <Image source={{uri : `https://image.tmdb.org/t/p/original/${image}`}} style={styles.movieImage} />
      <Text style={styles.movieText}>{titulo} - Nota: {nota}</Text>
    </TouchableOpacity>

    );


}