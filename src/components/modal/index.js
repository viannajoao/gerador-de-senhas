import { View, Text, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import * as Clipboard from 'expo-clipboard'


export function ModalPassword({ password, handleClose }) {

async function handleCopyPassword(){
    await Clipboard.setStringAsync(password)
    alert('Copy password')
  }
  

  return (
    <View style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.title}>Senha Gerada</Text>

        <Pressable style={styles.password} onPress={handleCopyPassword}>
          <Text style={styles.text}>
              {password}
          </Text>
        </Pressable>

        <View style={styles.buttonArea}>

          <TouchableOpacity style={styles.button} onPress={handleClose}>
            <Text>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.buttonSave]}>
            <Text style={styles.buttonSaveText}>Salvar Senha</Text>
          </TouchableOpacity>

        </View>

      </View>

    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(24, 24, 24, 0.5)'
  },
  content: {
    width: '85%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 14,
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 14,
  },
  password: {
    width: '90%',
    backgroundColor: '#0e0e0e',
    borderRadius: 8,
    padding: 14,
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
  },
  buttonArea: {
    width: '90%',
    marginTop: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  buttonSave: {
    backgroundColor: 'dodgerblue',
    color: '#FFF',
    padding: 8,
    borderRadius: 8,
  },
  buttonSaveText: {
    color: '#FFF',
    fontWeight: 'bold',
  }
})