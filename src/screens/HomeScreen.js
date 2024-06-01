




import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Image, TextInput, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import TaskList from '../../TaskList';

// Mock data for categories and tasks
const categories = [
  { id: '1', name: 'Exercise', description: '', image: require('../../assets/young woman working online.png') },
  { id: '2', name: 'Study', description: '', image: require('../../assets/young woman working at desk (1).png') },
  { id: '3', name: 'Code', description: '', image: require('../../assets/Profile Image.png') },
  { id: '4', name: 'Cook', description: '', image: require('../../assets/young woman working at desk (1).png') },
  { id: '5', name: 'Read', description: '', image: require('../../assets/young woman working at desk (1).png') },
  { id: '6', name: 'Travel', description: '', image: require('../../assets/young woman working at desk (1).png') },
  { id: '7', name: 'S', description: '', image: require('../../assets/young woman working at desk (1).png') },
  { id: '8', name: 'Workout', description: '', image: require('../../assets/young woman working at desk (1).png') },
  // Add more categories here if needed
];

const tasks = [
  { id: '1', name: 'Mobile App Development', category: 'Exercise' },
  { id: '2', name: 'Web Developmet', category: 'Study' },
  { id: '3', name: 'Push Ups', category: 'Code' },
  { id: '4', name: 'Cook', category: 'Cook' },
  { id: '5', name: 'Read', category: 'Music' },
  { id: '6', name: 'Travel', category: 'Connect Here' },
  { id: '7', name: 'Meditate', category: 'Art' },
  { id: '8', name: 'Task 8', category: 'PhotoGraphy' },
  { id: '9', name: 'Task 9', category: 'Gaming' },
  { id: '10', name: 'Task 10', category: 'Socializing' },
  { id: '11', name: 'Task 11', category: 'Hide' },
  { id: '12', name: 'Task 12', category: 'NEWS' },
];

const HomeScreen = () => {
  const [text, setText] = useState("");

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.salutationContainer}>
          <Text style={styles.salutation}>Hello, Devs</Text>
          <View style={styles.subTextContainer}>
            <Text style={styles.subText}>14 tasks today</Text>
          </View>
        </View>
        <View style={styles.personImageContainer}>
          <Image style={styles.personImage} source={require('../../assets/Profile Image.png')} />
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.textInputContainer}>
        <TouchableOpacity>
          <View style={styles.icon}>
            <Feather name="search" size={25} color="black" />
          </View>
        </TouchableOpacity>
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
          onChangeText={text => setText(text)}
          value={text}
        />
        <TouchableOpacity>
          <View style={{ marginLeft: 60 }}>
            <Image source={require('../../assets/Vector.png')} />
          </View>
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <View style={{ marginTop: 50, marginLeft: 20 }}>
        <Text style={{ fontSize: 25, fontWeight: "600", marginLeft: 10 }}>Categories</Text>
        <FlatList
  data={categories}
  renderItem={({ item }) => (
    <View style={styles.categoriesItem}>
      <View style={styles.categoryInfo}>
        <Text style={styles.categoryTitle}>{item.name}</Text>
        <Text style={styles.subText}>12 tasks</Text>
      </View>
      <Image source={item.image} style={styles.categoryImage} />
    </View>
  )}
  keyExtractor={(item) => item.id}
  horizontal
  showsHorizontalScrollIndicator={false}
/>

      </View>

      {/* Ongoing Tasks */}
      <View style={styles.taskContainer}>
        <Text style={styles.sectionTitle}>Ongoing Tasks</Text>
        <TaskList tasks={tasks} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D2B48C',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  salutationContainer: {
    flexDirection: 'column',
  },
  salutation: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 8,
  },
  subTextContainer: {
    flexDirection: 'row',
  },
  subText: {
    fontSize: 16,
    color: 'gray',
  },
  personImageContainer: {
    width: 50,
    height: 50,
  },
  personImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  icon: {
    padding: 10,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  categoriesItem: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 16,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoryImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  taskContainer: {
    marginHorizontal: 16,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default HomeScreen;

