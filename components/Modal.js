import React from 'react';
import { Modal, Flatlist, SafeAreaView,Alert, Button, StyleSheet, Text, TextInput, View, Pressable, TouchableOpacity } from 'react-native';

const image = {uri: 'http://legacy.reactjs.org/logo-og.png'};

const TextInputExample = () => {
  const [namdl, doinamdl]=React.useState(0);
  const [namal, doinamal]=React.useState('');
  const [itemchon, doichon]=React.useState({nam:'Tân', hinh: require('../assets/image/mouse.png')});
  const [vthinh, doivthinh] = React.useState(0)

const [modalVisible, setModalVisible]=React.useState(false);
var can=[{nam:'Canh',hinh:require('../assets/image/than.jpg')},
{nam:'Tân',hinh:require('../assets/image/dau.jpg'),mota:'abc'},
{nam:'Nhâm',hinh:require('../assets/image/suu.jpg'),mota:'abc'},
{nam:'Quý',hinh:require('../assets/image/ngo.jpg'),mota: 'abc'},
{nam:'Giáp',hinh:require('../assets/image/mui.jpg'),mota: 'abc'}]

var chon={nam:'Tân', hinh:require('../assets/image/dau.jpg'),mota:'abc'}

const ChonDT=()=>{
  Alert.alert(chon.nam+'\n'+chon.mota);
}

  return (
    <SafeAreaView style={styles.main}>
      <Modal
        style={styles.centeredView}
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={()=>{
          setModalVisible(!modalVisible);
        }}>
<View style={styles.centered_view}>
  <Text>{itemchon.nam}</Text>
  <Image source={itemchon.hinh} style={style.image}/>
  <Text>{itemchon.mota}</Text>
  <Pressable
  onPress={()=>setModalVisible(!modalVisible)}>
<Text>đóng</Text>
  </Pressable>
</View>
      </Modal>

      <Flatlist
         data={can}
         renderItem={({item})=>(
            <View>
                <Text style={styles.text}>{item.nam}</Text>
                <TouchableOpacity onPress={
                  ()=>{
                    doichon(item);
                    setModalVisible(true);
                  }
                }>
                  <Image source={item.hinh} style={styles.image}/>
                </TouchableOpacity>
            </View>
         )}
         ></Flatlist>

    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  input: {
    margin: 12,
    borderWidth:1,
    padding:10,
    flex: 0.4
  }, centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff'
  }, 
  main: {
    flex:1,
    margin:20
  },
  v1: {
    flexDirection: 'row'
  }, 
  tieude: {
    fontSize:30,
    backgroundColor:"blue",
    color:'#ffff',
    textAlign:'center',
  }
});
