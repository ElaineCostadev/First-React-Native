import React from 'react'
import { View, Text } from 'react-native'

function ResultImc({ resultImc, messageResultImc}) {
  return (
    <View>
      <Text>{ resultImc}</Text>
      <Text>{ messageResultImc}</Text>
    </View>
  )
}

export default ResultImc