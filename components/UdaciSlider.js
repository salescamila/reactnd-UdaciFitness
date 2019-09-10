import React from 'react'
<<<<<<< HEAD
import { View, Slider, Text } from 'react-native'

export default function UdaciSlider ({ max, unit, step, value, onChange }) {
  return (
    <View>
       <Slider
        step={step}
        value={value}
        maximumValue={max}
        minimumValue={0}
=======
import { View, Text, Slider } from 'react-native'

export default function UdaciSlider ({ max, unit, step, value, onChange}) {
  return (
    <View>
      <Slider
        step={step}
        value={value}
        maximumValue={max}
        minimumValue={min}
>>>>>>> doing_again
        onValueChange={onChange}
      />
      <View>
        <Text>{value}</Text>
        <Text>{unit}</Text>
      </View>
    </View>
  )
}