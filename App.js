import { StatusBar } from 'expo-status-bar';
import { Button, Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import Header from './src/Components/Header';
import colores from './src/Global/colores';
import FormPedidos from './src/Components/FormPedidos';
import { useState } from 'react';
import uuid from 'react-native-uuid'
import ModalDelete from './src/Components/ModalDelete';
import ListaPedido from './src/Components/ListaPedidos';

const App=()=> {

 
  const [newAccionPedido, setNewAccionPedido] = useState('')
  const [newIdentificacionPedido, setNewIdentificacionPedido] = useState('')
  const [newBuquePedido, setNewBuquePedido] = useState('')
  const [newExportadorPedido, setNewExportadorPedido] = useState('')
  const [newVencimientoPedido, setNewVencimientoPedido] = useState('')
  const [pedido, setPedido] = useState([])
  const [pedidoSelect, setPedidoSelect] = useState({})
  const [modalVisible, setModalVisible] = useState(false)
  const [deleteModalVisible, setDeleteModalVisible] = useState(false)

  const handlerAddPedido = () => {

    const newPedido ={
      id: uuid.v4(),
      exportador: newExportadorPedido,
      accion: newAccionPedido,
      identificacion: newIdentificacionPedido,
      buque: newBuquePedido,
      vencimiento: newVencimientoPedido  

    }
    setPedido(current => [...current, newPedido])
    setNewExportadorPedido('')
    setNewAccionPedido('')
    setNewIdentificacionPedido('')
    setNewBuquePedido('')
    setNewVencimientoPedido('')
  }
  const handlerModal = (item) => {
    setPedidoSelect(item)
    setDeleteModalVisible(true)
  }
  const handlerDelete = () => {
    setPedido(current => current.filter(item => item.id !== pedidoSelect.id))
    setDeleteModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <Header style={styles.header}/>
      <View style={styles.botonAgregarContainer}>
        <Button 
          style={styles.botonAgregar} 
          title='Agregar Pedido' 
          onPress={()=> setModalVisible(true)}
        />
        
      </View>
      <Modal
        animationType='slide'
        transparent
        visible={modalVisible}
        onRequestClose={()=> setModalVisible(false)}
      >
          <View style={styles.modalContainer} >
            <FormPedidos
              valueExportador={newExportadorPedido}
              onChangeExportador={setNewExportadorPedido}
              valueAccion={newAccionPedido}
              onChangeAccion={setNewAccionPedido}
              valueIdentificacion={newIdentificacionPedido}
              onChangeIdentificacion={setNewIdentificacionPedido}
              valueBuque={newBuquePedido}
              onChangeBuque={setNewBuquePedido}
              valueVencimiento={newVencimientoPedido}
              onChangeVencimiento={setNewVencimientoPedido}
              handlerAddPedido={handlerAddPedido}
              setModalVisible={setModalVisible}
            />
          </View>
      </Modal>
      <ListaPedido
        pedido={pedido}
        onModal={handlerModal}
      />
      
      <ModalDelete
      pedido={pedidoSelect}
      visible={deleteModalVisible}
      onModal={()=> setDeleteModalVisible(false)}
      onDelete={handlerDelete}
      />


    </View>
  );
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colores.terciario,
    alignItems: 'center',
    justifyContent: 'start',
  },
  modalContainer:{
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botonAgregarContainer:{
    padding: 16,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  botonAgregar:{
    width: '100%',
    backgroundColor: colores.terciario,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,

  },

});
