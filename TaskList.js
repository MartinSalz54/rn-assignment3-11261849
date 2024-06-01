import React from 'react';
import { FlatList, Text, StyleSheet, View } from 'react-native';
import Task from './Task';

const TaskList = ({ tasks }) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => <Task task={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TaskList;