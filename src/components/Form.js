import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  Pressable,
  Keyboard,
  FlatList,
  } from 'react-native';
import ResultImc from './ResultImc';
import styles from '../styles/Form.style';

function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState('Preencha o peso e a altura');
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState('Calcular');
  const [errorMessage, setErrorMessage] = useState(null);
  const [imcList, setImcList] = useState([]);


  const imcCalculator = () => {
    const heightFormat = height.replace(',', '.')
    const resultImc = (weight/ (heightFormat*heightFormat)).toFixed(2)
    setImcList((prevState) => [...prevState, {
      id: new Date().getTime(),
      imc: resultImc,
    }])
    setImc(resultImc)

  };

  const verificationImc = () => {
    if(imc == null) {
      Vibration.vibrate();
      setErrorMessage('Campo obrigatório*')
    }
  }

  const validationImc = () => {
    
    if(weight && height ) {
      imcCalculator()
      setHeight(null)
      setWeight(null)
      setMessageImc(`Seu IMC é igual:` )
      setTextButton('Calcular Novamente')
      setErrorMessage(null)
      
    } else {
        verificationImc()
        setImc(null)
        setTextButton('Calcular')
        setMessageImc('Preencha o peso e a altura')
    }
    
  };


  return (
    <View style={styles.formContext}>
      { !imc ?
      <Pressable
        style={styles.form}
        onPress={Keyboard.dismiss}
      >

        <Text style={styles.formLabel}>Altura</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput
          style={styles.input}
          onChangeText={setHeight}
          value={height}
          placeholder='Ex. 1.75'
          keyboardType='numeric'
        />

        <Text style={styles.formLabel}>Peso</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput
          style={styles.input}
          onChangeText={setWeight}
          value={weight}
          placeholder='Ex. 71.75'
          keyboardType='numeric'
        />

        <TouchableOpacity
          style={styles.buttonCalculator}
          onPress={ validationImc }
        >
          <Text style={styles.textButtonCalculator}>{textButton}</Text>
        </TouchableOpacity>
      </Pressable>
      :

      <View style={styles.exhibitionResultImc}>
        <ResultImc
          messageResultImc={messageImc}
          resultImc={imc}
        />
        <TouchableOpacity
          style={styles.buttonCalculator}
          onPress={ () => validationImc() }
        >
          <Text style={styles.textButtonCalculator}>{textButton}</Text>
        </TouchableOpacity>
      </View>
    }
    <FlatList
      // retirar o scroll
      showsVerticalScrollIndicator={false}
      style={styles.listImcs}
      data={[...imcList].reverse()}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => {
        return (
          <Text style={styles.resultImc}>
            
            <Text style={styles.textResultItemList}>Resultado IMC = </Text>
          
          {item.imc}
          </Text>
        )
      }}
    />

    </View>
  )
}

export default Form