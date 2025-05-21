import { Dimensions, StyleSheet } from "react-native";
const largura = Dimensions.get('window').width / 2


const styles = StyleSheet.create ({ 

    movieImage: {
        width: 350, 
        height: 390,
        left: 50,
        marginBottom: 10, 
        marginTop: 30,
      },

      Titulos: {
        fontSize: 30,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
      },

      
      descricao: {
        fontSize: 30,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
      },


      duracao:{ fontSize: 30,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
      },
      categoria: {
        fontSize: 30,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
      },


    

})
export default styles;