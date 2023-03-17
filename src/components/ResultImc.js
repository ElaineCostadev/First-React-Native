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
    <View style={styles.resultImc}>
      <View style={styles.boxShareButton}>
        { resultImc &&
        <TouchableOpacity
          style={styles.share}
          onPress={onShare}
        >
          <Text style={styles.sharedText}>Share</Text>
        </TouchableOpacity>
        }
      </View>
      <Text style={styles.information}>{ messageResultImc }</Text>
      <Text style={styles.numberImc}>{ resultImc }</Text>
    </View>
  )
}

export default ResultImc