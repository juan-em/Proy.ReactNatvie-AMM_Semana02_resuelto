import React from "react";
import { Text, 
         View, 
         StyleSheet, 
         Image, 
         TouchableOpacity, 
         Alert,
         TextInput } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola Mundo!</Text>
      <Image
        source={{uri:'https://picsum.photos/200/300'}}
        style={styles.image}
      />
      <TouchableOpacity
        onPress={()=> Alert.alert('Holaaa')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Presionar aquí</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Escribe algo aquí"
        placeholderTextColor="#FFFFFF"
      />
    </View>
    
  )
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#292929'
  },
  title:{fontSize: 30, color:'#fff'},
  image:{height:200, width:300, borderRadius:90},
  button:{
    backgroundColor:'blue',
    padding:7,
    margiTop: 10
  },
  buttonText: {
    color: "#fff", fontSize: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
    width: 300,
  }
})


export default App;