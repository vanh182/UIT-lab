import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
} from 'react-native';
const chitiet = (props) => {
    return (
        <View>
            <Modal
            animationType='slide'
            transparent={true}
            visible={true}
            >
                <VIew style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text>{props.item.tenhoa}</Text>
                        <Image source={props.item.hinh}/>
                        <Text>{props.item.mota}</Text>
                        <Pressable onPress={props.hideModal}>
                            <Text style={styles.textStyle}>Dong</Text>
                        </Pressable>
                    </View>
                </VIew>
            </Modal>
        </View>
    )
}

export default chitiet
const styles = StyleSheet.create({
     centeredView: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        marginTop:22,
     }
})