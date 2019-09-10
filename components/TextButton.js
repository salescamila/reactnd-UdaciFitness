import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

<<<<<<< HEAD
export default function TextButton ({ children, onPress }) {
=======
export default function TextButton ({ children, onPress}) {
>>>>>>> doing_again
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{children}</Text>
    </TouchableOpacity>
  )
}