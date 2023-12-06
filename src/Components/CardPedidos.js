import {View , Text , Button,StyleSheet } from "react-native"

const CardPedidos = ({item,onModal}) => {
    return <View style={styles.cardPedido}>
                <Text style={styles.cardExportador}>{item.exportador}</Text>
                <Text>{item.accion}</Text>
                <Text>{item.identificacion}</Text>
                <Text>{item.buque}</Text>
                <Text>{item.vencimiento}</Text>

                <Button title="DEL" onPress={() => onModal(item)}/>
            </View> 
}
const styles = StyleSheet.create({
    cardPedido:{
  
        flexDirection:"row",
        padding:10,
        margin:10,
        justifyContent:"space-around",
        alignItems:"center",
        borderWidth:4
      }
})
export default CardPedidos