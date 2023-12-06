import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import colores from '../Global/colores'

const FormPedidos = ({valueAccion, valueBuque, valueExportador, valueIdentificacion, valueVencimiento, onChangeVencimiento,onChangeIdentificacion,onChangeExportador, onChangeBuque,onChangeAccion, handlerAddPedido, setModalVisible}) => {


    
  return (
    <View style={styles.container} >
      <View style={styles.containerMayor} >
        <View style={styles.formContainer} >
        
            <TextInput 
            style={styles.input} 
            placeholder='Exportador/Importador' 
            value={valueExportador}
            onChangeText={(t) => onChangeExportador(t)}
            />
            <TextInput 
            style={styles.input} 
            placeholder='Accion' 
            value={valueAccion}
            onChangeText={(t) => onChangeAccion(t)}
            />
            <TextInput 
            style={styles.input} 
            placeholder='Identificacion' 
            value={valueIdentificacion}
            onChangeText={(t) => onChangeIdentificacion(t)}
            />
            <TextInput 
            style={styles.input} 
            placeholder='Buque' 
            value={valueBuque}
            onChangeText={(t) => onChangeBuque(t)}
            />
            
            <TextInput 
            style={styles.input} 
            placeholder='Vencimiento' 
            value={valueVencimiento}
            onChangeText={(t) => onChangeVencimiento(t)}
            />
            <Button title='Agregar' onPress={()=>{
              handlerAddPedido()
              setModalVisible(false)
            }}
            />
        </View>
      </View> 
    </View>
  )
}

export default FormPedidos

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerMayor: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    width: "80%",
    backgroundColor: "#fff", 
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    elevation: 5, // Sombras para Android
    shadowColor: "#000", // Sombras para iOS
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  input: {
    height: 40,
    width: 300,
    borderColor: colores.letras,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    paddingLeft: 10,
    textAlign: 'center',
  },
})