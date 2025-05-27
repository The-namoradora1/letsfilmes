import { Dimensions, StyleSheet } from "react-native";
const largura = Dimensions.get('window').width / 2


const styles = StyleSheet.create ({ 

    movieImage: {
        alignItems: "center",
        left:'13%',
        width: 330, 
        height: 390,
        marginBottom: 10, 
        marginTop: 30,
      },

      Titulos: {
        fontSize: 32,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
      },

      infos:{
        fontSize: 13,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        marginTop: 10,
      },

      fundo:{
        backgroundColor: '#141a29',
        width: '100%',
        height: '100%',

      },

      
      Descricao:{
        fontSize: 15,
        marginTop: 10,
        color: "white",
        textAlign: "center",
      },

      

  

})
export default styles;