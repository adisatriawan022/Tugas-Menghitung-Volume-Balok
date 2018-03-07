import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class MenghitungVolumeBalok extends Component {
  constructor(props) {
    super(props)
    this.state = {
      alas: 0,
      tinggi: 0,
      luas: 0,
      lebar: 0
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#1E824C' }}>

        <View style={{ height: 20, backgroundColor: 'red' }} />
        <View style={{ backgroundColor: '#1F3A93' }}>
           <Text style={{ padding: 10, fontSize: 20, color: 'white', textAlign: 'center' }} >
            Menghitung Volume Balok
          </Text>
         </View>

        <View style={{ margin: 20, padding: 10, backgroundColor: '#F9BF3B' }}>
            <TextInput style={{ height: 40 }}
              placeholder="Masukkan Alas"
              onChangeText={(alas) => this.setState({ alas })}
              keyboardType='numeric'
            />
            <TextInput style={{ height: 40 }}
              placeholder="Masukkan  Tinggi"
              onChangeText={(tinggi) => this.setState({ tinggi })}
              keyboardType='numeric'
            />
            <TextInput style={{ height: 40 }}
              placeholder="Masukkan  Lebar"
              onChangeText={(lebar) => this.setState({ lebar })}
              keyboardType='numeric'
            />

            <Button
              onPress={() => this.setState({
                luas: (this.state.alas * this.state.tinggi * this.state.lebar)
              })}
              title="Hitung"
              accessibilityLabel="Klik untuk menghitung"
            />
       </View>

        <View style={{ margin: 20, backgroundColor: '#96281B' }}>
          <Text style={{ padding: 10, fontSize: 20 }} >
              Alas = { this.state.alas } {'\n'}
              Tinggi = { this.state.tinggi } {'\n'}
              Lebar = {this.state.lebar} {'\n'}
              volume = {this.state.luas}
          </Text>
         </View>
   </View>
    );
  }
}
AppRegistry.registerComponent('AppForm2', () => HitungLuasSegitiga);
