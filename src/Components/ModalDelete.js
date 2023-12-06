import {Modal,View,Text,Button , StyleSheet} from "react-native"

const ModalDelete = ({pedido,visible,onModal,onDelete}) =>{

    return  <Modal visible={visible} transparent animationType="slide">
              <View style={styles.modalContainerMayor}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>desea eliminar el pedido?</Text>
                        <Text style={styles.modalText}>{pedido.title}</Text>
                        <View style={styles.contenedorBoton} >
                          <Button style={styles.boton} title="Aceptar" onPress={onDelete} />
                          <Button style={styles.boton} title="Cancelar" onPress={()=> onModal(false)}/>
                        </View>
                    </View>        
                </View>
              </View>  
            </Modal>
}
const styles = StyleSheet.create({
  modalContainerMayor:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"rgba(0,0,0,0.4)"

  },
    modalContainer:{
      width: "80%",
      backgroundColor: "#fff", // Fondo blanco del modal
      borderRadius: 10,
      padding: 20,
      alignItems: "center",
      elevation: 5, // Sombras para Android
      shadowColor: "#000", // Sombras para iOS
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.3,
      shadowRadius: 3,
      },
      modalContent:{
        width:"80%",
        borderWidth:0.5,
        padding:20,
        alignItems:"center",
        gap:10,
        borderRadius:10
      },
      modalText:{
        textAlign:"center",
        marginBottom:20
      },
      contenedorBoton:{
        flexDirection:"row",
        justifyContent:"space-around",
        width:"100%"
      },
      boton:{
        marginTop:10,
        
      }
})
export default ModalDelete