import { StyleSheet, Text, View, Slider } from 'react-native'

export default class _notes extends React.Component {
  state = {
    value: 0
  }

  render() {
    return (
      <View>
        {/* --- BUTTONS ---- */}
        <View style={styles.container}>
          <TouchableHighlight style={styles.btn} onPress={this.handlePress} undelayColor='#d4271b'>
            <Text style={styles.btnText}>Touchable Highlight</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.container}>
          <TouchableOpacity style={styles.btn} onPress={this.handlePress}>
            <Text style={styles.btnText}>Touchable Opacity</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={this.handlePress}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Touchable Without Feedback</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        //Only works on Android
        <View style={styles.container}>
          <TouchableNativeFeedback 
            background={TouchableNativeFeedback.SelectBackground()}
            onPress={this.handlePress}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Touchable Native Feedback</Text>
              </View>
          </TouchableNativeFeedback>
        </View>
        // ---------------

        {/* --- SLIDER ---- */}
        <View>
          <Slider
            minimumValue={-10}
            maximumValue={10}
            step={1}
            value={this.state.value}
            onValueChange={(value)=> this.setState(()=>({ value }))}
          />
          <Text>
            Value: {this.state.value}
          </Text>
        </View>
      </View>
    )
  }
}
