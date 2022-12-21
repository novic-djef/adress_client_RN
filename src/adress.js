import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {  Text, View, StyleSheet, TextInput, Image} from 'react-native';

import {
  MaterialIcons,
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";


export default function Adress() {
  const [items, setItem] = useState([
    {
      itemId: "1",
      name: "Sammuel Eto'o",
      imgUrl:
        "https://th.bing.com/th?id=OIF.rCCJISlf%2fdnNPB8aDahRYQ&w=185&h=180&c=7&r=0&o=5&pid=1.7",
      ville: "cotonous rue 74 MARCHER A",
       lieu:"en face de la presidence de la republique ",
      telphone: "690089951",
      imgMap: "https://th.bing.com/th/id/OIP.hEuCM6G7zZzLSQlC2rB7rQAAAA?w=162&h=180&c=7&r=0&o=5&pid=1.7",
    },
    {
      itemId: "2",
      name: "Francis Nganou",
      imgUrl:
        "https://th.bing.com/th/id/OIP.5Avt_LtbwiQ65ZmVa_YycgHaFY?w=239&h=180&c=7&r=0&o=5&pid=1.7",
      ville: "cotonous rue 74 MARCHER A",
       lieu:"face hotel de select ",
      telphone: " 00237690089951",
      imgMap: "https://th.bing.com/th/id/OIP.KEBDyVPzvjt9O2bkrEY-PAHaHa?w=187&h=187&c=7&r=0&o=5&pid=1.7",
    },
    {
      itemId: "3",
      name: "Naruto Kakashi",
      imgUrl:
        "https://th.bing.com/th/id/OIP.yK2IgrFVpwer6jFX_oQjygHaKL?w=130&h=180&c=7&r=0&o=5&pid=1.7",
      ville: "cotonous rue 74 MARCHER A",
       lieu:"en face de la presidence de la republique ",
      telphone: "690089951",
      imgMap: "https://th.bing.com/th/id/OIP.hEuCM6G7zZzLSQlC2rB7rQAAAA?w=162&h=180&c=7&r=0&o=5&pid=1.7",
    },
  ])
  return (
    <View style={styles.container}>
      <View style={{position: 'relative', marginEnd: 12,}} >
      <Ionicons name="arrow-back-outline" size={25} color="#000" />
      <Ionicons style={{position: 'relative', left: 350,top: -25}} name="ellipsis-vertical-outline" size={25} color="#000" />

          <Text style={styles.headerTitle} >Adresses</Text>
      </View>
      <View style={styles.containerInput}>
            <View style={styles.openDialogue}>
            <MaterialIcons style={{ }} name="search" size={25} color="#000" />
            </View>
        <TextInput
        style={styles.textInputcolor}
        type="search"
        placeholder='           Entrer votre recherche ici...'
        />
      </View>
      <View >
      {items &&
        items.map((item, i) => (
         <>
         <View
         key={i}
         style={styles.body}
         >
          <View style={{ marginBottom: 8, flexDirection: 'row', borderWidth: 2, borderColor : '#436DF7', height: 53, width: 53, borderRadius: 33, }}>
          <View style={{  }}>
          <Ionicons style={{ flex: 1, justifyContent: 'center',  backgroundColor : '#436DF7', height: 15, width: 15, borderRadius: 33, position: 'absolute', left: 42,  }} name="checkmark-outline" size={15} color="#fff" />
          
            <Image
              source={{ uri: item.imgUrl }}
              style={
                
                { margin: 2, height: 45, width: 45,  borderRadius: 33, borderColor : '#436DF7' }
              } />
              </View>
          </View>
          <View
            style={{
              flexGrow: 1,
              flexShrink: 1,
              alignSelf: "center",
              margin: 12,
              marginTop: 95,
            }}
          >
              <Text numberOfLines={1} style={{ fontSize: 17, color: "#000000", fontWeight: 600,}}>
              {item.name}
              </Text>
              <View style={{ position: 'relative', right:75, margin: 29, color: "#8f8f8f",  }}>
              <Text numberOfLines={1}  style={{ position: 'relative', color: "#000", }}>
               {item.ville}
              </Text>

              <Text style={{color: "#8f8f8f", }}>{item.lieu}</Text>
              <Text style={{color: "#8f8f8f"}}>{item.telphone}</Text>
              </View>
              <View style={{ position: "relative", left: 120, top: -92,   }}>
                 <Image
              source={{ uri: item.imgMap }}
              style={
          { height: 70, width: 70, backgroundColor: "#eeeeee", position: 'relative', left: 80, borderRadius: 33,  }} />

              </View>

            </View>
            </View></>
       ))}
      </View>
    </View>

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 12,
  
  },
  headerTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: 700,
    color: '#000',
    position: 'relative',
    margin: 12,
    left:140,
    top: -60,
    

  },
  textInputcolor: {
  margin: 8,
  height:30,
  height: 40,
  backgroundColor: '#eee',
  marginBottom: 22,
  borderRadius: 33,

  },

openDialogue: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'flex-start',
    position: 'absolute',
    marginLeft:14,
    top: 20,


},

   icon: {
        width: 22,
        height: 22,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: -4,
        
        
      },
      body: {
        flexDirection: "row",
        backgroundColor: "#eee",
        marginBottom: 2,
        height: 160,
        margin: 10,
        borderRadius: 22,
        borderColor: "#000"
      }
});
