import { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native'
import Slider from '@react-native-community/slider'
import { ModalPassword } from '../../components/modal/index'

const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

export function Home() {

  const [size, setSize] = useState(10)
  const [passwordValue, setPasswordValue] = useState('')
  const [modal, setModal] = useState(false)


  function generatePassword() {
    let password = ''
    for (let i = 0, n = charset.length; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() * n))
    }

    setPasswordValue(password)
    setModal(true)
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/abrir-cadeado.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>{size} Caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor={'#FFF'}
          minimumTrackTintColor={'#000'}
          thumbTintColor='dodgerblue'
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>

    <Modal visible={modal} animationType='fade' transparent={true} >
      <ModalPassword password={passwordValue} handleClose={()=> setModal(false)} />
    </Modal>

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
    color: 'white'
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    padding: 4,
    backgroundColor: '#392de9',
    borderRadius: 8,
    width: '80%'
  },
  button: {
    backgroundColor: '#392de9',
    padding: 8,
    borderRadius: 8,
    height: 50,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  }
})