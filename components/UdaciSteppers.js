import React from 'react'
<<<<<<< HEAD
import { View, TouchableOpacity, Text } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons'

export default function UdaciSteppers ({ max, unit, step, value, onIncrement, onDecrement }) {
  return (
    <View>
      <View>
        <TouchableOpacity onPress={onDecrement}>
          <FontAwesome name='minus' size={30} color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onIncrement}>
          <FontAwesome name='plus' size={30} color={'black'} />
=======
import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons'

export default function UdaciSteppers({ max, unit, step, value, onIncrement, onDecrement }) {
  return(
    <View>
      <View>
        <TouchableOpacity onPress={onDecrement}>
          <FontAwesome name='minus' size={30} color={'black'}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={onIncrement}>
          <FontAwesome name='plus' size={30} color={'black'}/>
>>>>>>> doing_again
        </TouchableOpacity>
      </View>
      <View>
        <Text>{value}</Text>
        <Text>{unit}</Text>
      </View>
    </View>
  )
}