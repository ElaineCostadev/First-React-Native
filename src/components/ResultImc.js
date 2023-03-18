import React from 'react'
import { View, Text, TouchableOpacity, Share } from 'react-native'
import styles from '../styles/ResultImc.style'

function ResultImc({ resultImc, messageResultImc}) {
  
  const onShare = async () => {
    await Share.share({
      message: `Meu IMC é ${resultImc}`,
    })
  }
  
  return (
    <View style={styles.contextImc}>
      <View style={styles.boxShareButton}>
        <Text style={styles.information}>{ messageResultImc }</Text>
        <Text style={styles.numberImc}>{ resultImc }</Text>
        <TouchableOpacity
          style={styles.share}
          onPress={onShare}
        >
          <Text style={styles.sharedText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ResultImc