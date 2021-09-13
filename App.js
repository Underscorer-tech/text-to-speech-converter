import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image ,Button, TouchableOpacity } from 'react-native';
import * as Speech from 'expo-speech'
import { render } from 'react-dom';

export default class App extends React.Component {

constructor(){
super();
  this.state={
 
    text:null,

  }

}

speak=()=>{
var WordSay = this.state.text
Speech.speak(WordSay)
}

render(){
  return (

    <View>
      <View style={{ marginTop: '20px' }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 30,
            fontFamily: 'monospace',
            backgroundColor: 'aqua',
            fontWeight: 'bold'
          }}

        >Text-To-Speech Converter</Text>
      
      </View>
      
      <View style={{
        alignItems: 'center',
        marginTop: '80px',

      }}>

        <Image source={require("./assets/AudioToSpeech.png")}
          style={{
            width: '200px',
            height: '200px',
          }} />
      
        <View
      style={{ marginLeft: '25px' }}>
          <TextInput style={{alignSelf:'center',textAlign:'center'}}
               onChangeText={text => {
                this.setState({ text: text });
              }}
              value={this.state.text} style={{
            borderWidth: 3,
            width: '250px',
            height: '29px'

          }} />
        </View>
<View style={styles.hear}>
     <TouchableOpacity
  onPress={this.speak}
 >
       <Text style={{fontWeight:'bold',fontSize:'32px',textAlign:'center'}}>Click Me To Hear Speech</Text></TouchableOpacity>
      </View>
      </View>
    


    </View>
  )}
}

const styles = StyleSheet.create({

hear:{
backgroundColor:'aqua',
borderWidth:1,
marginTop:'60px',
width:'250px',
marginLeft:'35px',
borderRadius:'5%',



},

inputBox:{    marginTop: 50,
  width: '80%',
  alignSelf: 'center',
  height: 40,
  textAlign: 'center',
  borderWidth: 4,
  outline: 'none',}



})
