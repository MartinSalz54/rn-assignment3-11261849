import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskScreen = ({ route }) => {
  const { task } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{task.name}</Text>
      <Text style={styles.details}>Category: {task.category}</Text>
      {/* Add more task details here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  details: {
    fontSize: 18,
  },
});

export default TaskScreen;