import { View, Text, TextInput, Button, StyleSheet } from "react-native"
import { useState } from "react";

export default function App(){
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');
  const [resultado, setResultado] = useState(null);

  function calculaMedia(){
    let n1 = parseFloat(nota1)
    let n2 = parseFloat(nota2)
    let n3 = parseFloat(nota3)

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)){
      setResultado("Insira dados válidos")
      return;
    }

    setResultado((n1 + n2 + n3) / 3);
  }
  return(
    <View>
      <Text>Digite as notas ∛</Text>
      <TextInput style={styles.input} onChangeText={setNota1} keyboardType="numeric" />
      <TextInput style={styles.input} onChangeText={setNota2} keyboardType="numeric" />
      <TextInput style={styles.input} onChangeText={setNota3} keyboardType="numeric" />
      <Button style={styles.botao} onPress={calculaMedia} title="Calcular" />
      <View style={styles.caixaResultado}>
        {
          resultado != null && resultado > 7  && (
            <Text>Parabéns, sua média é {resultado.toFixed(1)} e você está aprovado!</Text>
          )
        }
        {
          resultado != null && resultado < 7 && (
            <Text>Que pena, sua média foi {resultado.toFixed(1)} e você está reprovado</Text>
          )
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#007bff',
    marginBottom: 10,
    width: 200,
  }, 
  botao: {
    width: 350,
  },
  caixaResultado: {
    width: 200,
  },
});