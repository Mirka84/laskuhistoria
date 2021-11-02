
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native';

export default function App() {

    const [number1, setNumber]=useState(null);
    const [number2, setNumber2]=useState(null);
    const [answer, setAnswer]=useState(null); 
    const [data, setData]=useState([]); 
    const [text, setText]=useState(''); 
    
  
  
    const buttonAdd = () => {

      setAnswer(parseInt(number1) + parseInt(number2));

      setText('' + number1 + ' + ' + number2 + ' = ' + setAnswer); 

      setData([...data, {key: text}]); 

      setNumber(null); 
      setNumber2(null); 

    }

  
    const buttonMinus = () => {
      setAnswer(parseInt(number1) - parseInt(number2)); 

      setText('' + number1 + ' - ' + number2 + ' = ' + setAnswer); 

      setData([...data, {key: text}]); 

      setNumber(null); 
      setNumber2(null); 
    }
  
  
    return (
  
      <View style={styles.container}>
  
        
          <Text>Result: {answer}</Text>
          <TextInput style={styles.textinput}
            onChangeText={number1 => setNumber(number1)}
            value={number1}
            keyboardType="numeric"
          />
          <TextInput style={styles.textinput}
            onChangeText={number2 => setNumber2(number2)}
            value={number2}
            keyboardType="numeric"
          />
          <View style={styles.button}>
          <Button onPress={buttonAdd} title="+" />
          <Button onPress={buttonMinus} title="-" />
          </View>
        <Text>History:</Text>
        <FlatList
            data={data}
            renderItem={({ item }) =>
            <Text>{item.key}</Text>
          }
        />
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
    textinput: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    }, 
    button: {  
      flexDirection: 'row',
      alignItems:'center',
      justifyContent: 'space-around',
    }
  });
  
