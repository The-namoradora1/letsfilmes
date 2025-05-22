import { Dimensions, StyleSheet } from "react-native";
const largura = Dimensions.get('window').width / 2


const styles = StyleSheet.create ({ 

    movieImage: {
        width: 330, 
        height: 390,
        left: '4%',
        marginBottom: 10, 
        marginTop: 30,
      },

      Titulos: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
      },

      notas:{
        fontSize: 20,
        fontWeight: "black",
        color: "white",
        textAlign: "center",
      },

      fundo:{
 backgroundColor: '#141a29',
 width: '100%',
 height: '100%',

      }

  

})
export default styles;