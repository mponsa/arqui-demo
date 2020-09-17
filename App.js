import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { grey, black } from 'color-name';

export default function App() {

  const pressFunction = () => {
    alert("Hola mundo!")
  }


  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image style={styles.image} source={require('./assets/CICD.jpg')}></Image>
        </View>
        <View style={styles.cardContainer}>
          <Text style={styles.headerText}>Vamos a demostrar un flujo de CI/CD con Circle-CI:</Text>
          
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer:{
    flex:0.5,
    justifyContent:'center',
    paddingBottom: 80
  },
  cardContainer:{
    backgroundColor: '#f5f5f5',
    width: '90%',
    borderRadius: 10,
    marginBottom: 60,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,
    
    elevation: 14,
    flex:0.3
  },
  headerText:{
    margin:10,
    fontSize: 30,
    color: '#303030',
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: 'white',
    borderColor: '#bdbdbd',
    borderWidth: 2,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: 'center',
    shadowColor: 'black',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 3.49,
  },
  buttonText:{

  },
  image: {
    marginTop: 100,
    height:300,
    width:400
  },
  
});
