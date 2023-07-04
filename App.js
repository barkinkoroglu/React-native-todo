import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [data, setData] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const addInputHandler = (enteredGoalText) => {
    setData((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    setData((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };

  const startGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={startGoalHandler}
        />
        {modalIsVisible && (
          <GoalInput
            onAddGoal={addInputHandler}
            endGoal={endAddGoalHandler}
            visible={modalIsVisible}
          />
        )}

        <View style={styles.goalsContainer}>
          <FlatList
            data={data}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  deleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },

  goalsContainer: {
    flex: 5,
  },
});
