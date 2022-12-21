import React, {useState} from "react";
import {StyleSheet, ScrollView, TouchableOpacity, View, Image, Text, TextInput } from "react-native";
import {
  Ionicons,
} from "@expo/vector-icons";

export default function DetailAdress() {
    const [number, onChangeNumber] = useState(null);
  return(
    <View>
      <ScrollView>
          <TouchableOpacity>
      <View>
      <Text style={{ marginTop: 22, fontSize: '13', color: '#9E9E9E', paddingLeft: 24, }}>Titre de l'adresse </Text>

      <TextInput
        style={{height: 40, margin: 12, padding: 0, borderWidth: 0, borderRadius: 12, backgroundColor: '#fff'}}
        onChangeText={onChangeNumber}
        value={number}
        placeholder={"  Titre de votre adresse"}
        placeholderTextColor={"#9E9E9E"}
        keyboardType="numeric"
      />
      </View>
      <View>
        <Text style={{fontSize: '18', fontWeight: 'bold', paddingLeft: 24, }}>choisir une adresse</Text>
        <View >
       <Image
       style={{alignSelf: 'center', flexDirection: 'row', justifyContent: 'center',
       backgroundColor: '#fff', width: '90%', height: 260, padding: 20, paddingBottom: 22, borderRadius: 22, shadowOpacity: 80, elevation: 15, marginTop: 20}}
        source={{
          uri: 'https://th.bing.com/th/id/R.ee30cb4520b8d98912e97917318eb802?rik=ZD4x%2bIx43%2bf9Mw&pid=ImgRaw&r=0'
          }}
      />  
          </View>
      </View>
          </TouchableOpacity>
        <View>
          
          <View style={{alignSelf: 'center', flexDirection: 'row', justifyContent: 'center', borderWidth: 1, borderColor: '#433DB7',
          backgroundColor: '#fff', width: '90%', padding: 10, paddingBottom: 12, borderRadius: 13, shadowOpacity: 80, elevation: 15, marginTop: 20}}>
          <View style={{borderRadius: '50%', backgroundColor: '#433DB7', }}><Ionicons name="pin-outline" style={{ color: '#fff', fontSize: 30, marginTop: 10, fontWeight: 'bold', borderRadius: 22,}} /></View>
          <Text style={{fontSize: 15, color: '#000', fontWeight: 'bold', marginLeft: 10}}>Utiliser votre position actuelle  <Text style={{fontSize: 15, color: '#818181', fontWeight: 'bold', marginLeft: 12}}>Nouvelle route cotonou 12</Text> </Text>
          <Ionicons  name="chevron-forward-outline" style={{ color: '#433DF7', fontSize: 45, fontWeight: 'bold', marginLeft: 4, borderRadius: 22,}} />
          </View>

          <View>
          <Text style={{ marginTop: 22, fontSize: '13', color: '#9E9E9E', paddingLeft: 24, }}>Veiller nous indiquer votre adresse pour votre future livraison svp</Text>
        {/*  <View style={{ top: 10, alignSelf: 'center', justifyContent: 'center',
        backgroundColor: '#fff', width: '90%', padding: 10, paddingBottom: 12, borderRadius: 10, shadowOpacity: 80, elevation: 15, marginTop: 20}}>
       <TextInput
            style={styles.TextInputStyleClass}
            underlineColorAndroid="transparent"
            placeholder={"rue memo avenu 12 Cotonou Benin."}
            placeholderTextColor={"#9E9E9E"}
            numberOfLines={4}
            multiline={true}
          />
          </View> */}
      </View>

          {/* <View style={{alignSelf: 'center', flexDirection: 'row', justifyContent: 'center',
        backgroundColor: '#fff', width: '90%', padding: 20, paddingBottom: 22, borderRadius: 10, shadowOpacity: 80, elevation: 15, marginTop: 20}}>
          <Ionicons name="call-outline" style={{ color: '#818181', fontSize: 25, fontWeight: 'bold', marginLeft: 10,}} />
          <Text style={{fontSize: 15, color: '#818181', fontWeight: 'bold', marginLeft: 12}}> 690089951</Text>
          </View> */}
 


          <View style={{alignSelf: 'center', flexDirection: 'row', justifyContent: 'center',
        backgroundColor: '#433DB6', width: '90%', padding: 20, paddingBottom: 22, borderRadius: 10, shadowOpacity: 80, elevation: 15, marginTop: 20}}>
          <Text style={{fontSize: 15, color: '#fff', fontWeight: 'bold', marginLeft: 12}}>Enregistrer</Text>
          </View>
        </View>
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
    
 
  
   TextInputStyleClass:{
  
    //  textAlign: 'center',
    //  height: 50,
    //  borderWidth: 2,
    //  borderColor: '#9E9E9E',
    //  borderRadius: 20 ,
    //  backgroundColor : "#FFFFFF",
    //  height: 150
      
     }
  
 });