import { Text, TextInput,TouchableOpacity, View, FlatList, Image } from "react-native-web";
import { useNavigation } from "@react-navigation/native";
import styles from "./stilo.js";
import DATA from '../../../movies.js';

export default function Listaplana(titulo, nota, image) {

    const navigation = useNavigation();

    return (

      <TouchableOpacity style={styles.butao}>
      <Image source={image} style={styles.movieImage} />
      <Text style={styles.movieText}>{titulo} - Nota: {nota}</Text>
    </TouchableOpacity>

    );


}