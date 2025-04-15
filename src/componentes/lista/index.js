import { Text, TextInput,TouchableOpacity, View, FlatList, Image } from "react-native-web";
import styles from "./stilo.js";
import DATA from '../../../movies.js';

export default function Listaplana() {
    return (
        <FlatList 
        numColumns={2}
        data={DATA} 
        keyExtractor={item => item.id.toString()} 
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.butao}>
            <Image source={item.image} style={styles.movieImage} />
            <Text style={styles.movieText}>{item.nome} - Nota: {item.nota}</Text>
          </TouchableOpacity>
        )}
        />
    );


}