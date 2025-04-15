import { Dimensions, StyleSheet } from "react-native";
const largura = Dimensions.get('window').width / 2


const styles = StyleSheet.create ({
  butao: {
    pandingTop: 20,
    paddingBottom: 16, 
    paddingRight: 8,
    paddingLeft: 8, 
    alignItems: "center", 
    width: largura,
    height: 'auto'
  },

    movieItem: {
        flex: 1,
        alignItems: "center", 
        margin: 10,
        backgroundColor: "Gray", 
        borderRadius: 10, 
        padding: 10,
      },
      movieImage: {
        width: 150, 
        height: 200,
        borderRadius: 10,
        marginBottom: 10, 
      },
      movieText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
      },

})

export default styles;