import {
  TextInput,
  View,
  Button,
  StyleSheet,
  Modal,
  Image,
} from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const goalInputHandler = (e) => {
    setEnteredGoalText(e.nativeEvent.text);
  };

  const addInputHandler = (enteredGoalText) => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />
        <TextInput
          onChange={goalInputHandler}
          style={styles.textInput}
          placeholder="Your course goal!"
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={() => addInputHandler(enteredGoalText)}
              color="#5e0acc"
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.endGoal} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    padding: 16,

    backgroundColor: '#311b6b',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    width: '100%',
    padding: 16,
    backgroundColor: '#e4d0ff',
    borderRadius: 6,
    color: '#120438',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
