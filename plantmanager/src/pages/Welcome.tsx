import React, { useState } from 'react'
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

import { Button } from '../components/Button'

import wateringImg from '../assets/watering.png'
import colors from '../styles/colors'


export function Welcome(){
  const [visible, setVisible] = useState(false)

  function handleVisibility(){
    setVisible(true)
  }

  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
          Genrecie {'\n'}
          suas plantas {'\n'}
          de forrma fácil
        </Text>
        
        {
          visible &&
         <Image source={wateringImg} style={styles.image} />
        }

        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas.
          Nós cuidamos de lembrar você sempre que precisar.
        </Text>

        <Button title=">" onPress={handleVisibility}/>
        
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.heading,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 38,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
  },
  
  image: {
    width: 292,
    height: 284,
  },
  

})