import React from 'react'
import { View, Text, Slider } from 'react-native'

export default function UdaciSlider ({ max, unit, step, value, onChange}) {
  return (
    <View>
      <Slider
        step={step}
        value={value}
        maximumValue={max}
        minimumValue={min}
        onValueChange={onChange}
      />
      <View>
        <Text>{value}</Text>
        <Text>{unit}</Text>
      </View>
    </View>
  )
}