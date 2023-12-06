import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colores from '../Global/colores'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>EACE comex</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor:colores.primario,
        width: "100%",
        height: 80,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
      },
      titulo: {
        fontSize: 30,
        color: colores.letras,
        fontWeight: 'bold',
      },
})