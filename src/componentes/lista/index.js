import { Text, TextInput,TouchableOpacity, View, FlatList, Image } from "react-native-web";
import { useNavigation } from "@react-navigation/native";
import styles from "./stilo.js";


export default function Listaplana({titulo, descricao, duracao, categoria, nota, imagem}) {

    const navigation = useNavigation();

    return (

      <TouchableOpacity style={styles.butao} onPress = {() => navigation.navigate('Detalhes', {titulo, descricao, duracao, categoria, nota, imagem})}>
      <Image source={imagem} style={styles.movieImage} />
      <Text style={styles.movieText}>{titulo} - Nota: {nota}</Text>
    </TouchableOpacity>

    );


}