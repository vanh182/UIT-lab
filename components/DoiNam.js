// import React, { Component } from 'react';
// import { SafeAreaView,Alert,Image, Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

// const TinhNamAmLich=()=>{
//   const [namdl, doinamdl]=React.useState(0);
//   const [namal, doinamal]=React.useState('');
//   const [hinh, doihinh]=React.useState(require('../assets/image/mouse.png'));
//   const [vthinh, doivthinh] = React.useState(0)
//   var hinhanh=[require('../assets/image/mouse.png'),require('../assets/image/mouse.png'),require('../assets/image/mouse.png'),
//   require('../assets/image/mouse.png'),require('../assets/image/mouse.png'),require('../assets/image/mouse.png'),
//   require('../assets/image/mouse.png'),require('../assets/image/mouse.png'),require('../assets/image/mouse.png'),
//   require('../assets/image/mouse.png'),require('../assets/image/mouse.png'),require('../assets/image/mouse.png')];
//   var can=['Canh','Tân','Nhâm','Quý', 'Giáp', 'Ất', 'Bính', 'Đinh','Mậu','Kỷ'];
//   var chi=['Thân','Dậu','Tuất','Hợi', 'Tý', 'Sửu', 'Dần', 'Mão','Thìn','Tị','Ngọ','Mùi'];
  
// const DoiNam=()=>{
//     var kq=can[namdl%10]+' '+chi[namdl%12];
//     doinamal(kq);
//     doihinh(hinhanh[namdl%12]);
// }
// return(
//   <SafeAreaView style={styles.main}>
//          <Text style={styles.tieude}>Tính Năm Âm Lịch</Text>
//          <View style= {styles.v1}>
//            <Text style={styles.v2}>Nhập năm DL</Text>
//            <Text style={styles.v2}>Năm AL</Text>
//          </View>
//          <View style= {styles.v1}>
//           <TextInput style = {styles.input}
//             value={namdl} onChangeText={doinamdl}/>
//           <TouchableOpacity onPress={DoiNam} 
//           activeOpacity={0.5}>
//           <View style = {styles.nut}>
//             <Text>=</Text>
//           </View>
//           </TouchableOpacity>
//           <TextInput style={styles.input}
//             value={namal}
//             onChangeText={doinamal} />
//           </View>
//         <Image source={hinh}/>
//       </SafeAreaView>
//     );
//   };
//   export default TinhNamAmLich;
  
//   const styles = StyleSheet.create({
//     input: {
      
//       margin: 12,
//       borderWidth: 1,
//       padding: 10,
//       flex: 0.4
//     },
//     main:{
//       flex:0.5,
//       margin:20,
//       backgroundColor: 'cyan'
//     },
//     v1:{
//       flexDirection:"row",
     
//     },
//     v2:{
//         flexDirection:"row",
       
//       },
//       tieude: {
//         fontSize: 15,
//         color: 'white',
//         backgroundColor: 'blue',
//         textAlign: 'center',
//       }
//   });


import { StyleSheet, Image, Text, View, Button, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { Alert } from 'react-native';
import React from 'react';

const TinhNamAmLich = () => {
  const [namdl, doinamdl] = React.useState('');
  const [namal, doinamal] = React.useState('');
  const [hinh, doihinh] = React.useState('');
  const [vthinh, doivthinh] = React.useState('');
  var hinhanh = [require('../assets/images/than.jpg'),
  require('../assets/images/dau.jpg'), require('../assets/images/tuat.jpg'),
  require('../assets/images/hoi.jpg'), require('../assets/images/ty.jpg'),
  require('../assets/images/suu.jpg'), require('../assets/images/dan.jpg'),
  require('../assets/images/mao.jpg'), require('../assets/images/thin.jpg'),
  require('../assets/images/ti.jpg'), require('../assets/images/ngo.jpg'),
  require('../assets/images/mui.jpg'),];
  var can = ['Canh', 'Tân', 'Nhâm', 'Quý', 'Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ'];
  var chi = ['Thân', 'Dậu', 'Tuất', 'Hợi', 'Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tị', 'Ngọ', 'Mùi'];
  const DoiNam = () => {
    var kq = can[namdl % 10] + ' ' + chi[namdl % 12];
    doinamal(kq);
    doihinh(hinhanh[namdl % 12]);
  }
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.Title}>
      <Text style={styles.texttieude}>Tính năm âm lịch</Text>
      </View>
      
      <View style={styles.v1}>
        <Text style={styles.v2}>Năm dương lịch</Text>
        <Text style={styles.v2}>Năm âm lịch</Text>
      </View>
      <View style={styles.v1}>
        <TextInput style={styles.input}
          value={namdl} onChangeText={doinamdl} />
        <TouchableOpacity onPress={DoiNam}
          activeOpacity={0.5}>
          <View style={styles.nut}>
            <Text>=></Text>
          </View>
        </TouchableOpacity>
        <TextInput style={styles.input}
          value={namal}
          onChangeText={doinamal} />
      </View>
      <View style= {styles.images}>
        <Image
          style={styles.imageStyle}
          source={hinh}/>
      </View>

    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 0.4,
    borderWidth: 1,
    padding: 5,
    backgroundColor:'white',
    height: 30,
marginLeft:30
  },
  main: {
   marginTop:40,
    backgroundColor: '#ADD8E6'
  },
  text: {
    color: 'red',
    fontSize: 20,
  },
  v1: {
    flexDirection: 'row',
    paddingLeft:10,
  },
  Title: {
    backgroundColor: "blue",
    alignItems: "center",
  },
  texttieude: {
    fontSize: 25,
    color: "white",
  },
  v2: {
    flex: 0.5,
    fontSize: 16,
    padding: 10,
    paddingLeft:30,

  },
  nut: {
    borderWidth: 1,
    padding:4 ,
    backgroundColor: 'white',
    height:30,
    marginLeft:60,
    marginRight:20
  },

  imageStyle: {
    width: 250,       
    height: 250,  
  },
  images:{
    alignItems: 'center',
    padding: 10,
    
  }

});
export default TinhNamAmLich;









