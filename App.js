import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Slider from '@react-native-community/slider'

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/abrir-cadeado.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Gerrador de senhas</Text>

      <View style={styles.area}>
        <Slider
          style={{height: 50}}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor={'#ff0000'}
          minimumTrackTintColor={'#000'}
          thumbTintColor='dodgerblue'
        />
      </View>

    <TouchableOpacity>
      <Text>Gerar senha</Text>
    </TouchableOpacity>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    marginTop: 34,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    padding: 8,
    backgroundColor: '#FFF',
    borderRadius: 8,
    width: '80%'
  }
})