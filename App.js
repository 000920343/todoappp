import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import CompletedList from './components/CompletedList';
import UserManual from './components/UserManual';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [showManual, setShowManual] = useState(false); // Toggle for User Manual

  const addTask = (taskText) => {
    if (taskText) {
      setTasks([...tasks, { id: tasks.length + 1, text: taskText }]);
    }
  };

  const completeTask = (id) => {
    const taskToComplete = tasks.find((task) => task.id === id);
    if (taskToComplete) {
      setCompletedTasks([...completedTasks, taskToComplete]);
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  const undoTask = (id) => {
    const taskToUndo = completedTasks.find((task) => task.id === id);
    if (taskToUndo) {
      setTasks([...tasks, taskToUndo]);
      setCompletedTasks(completedTasks.filter((task) => task.id !== id));
    }
  };

  if (showManual) {
    return <UserManual goBack={() => setShowManual(false)} />;
  }

  return (
    <ImageBackground
      source={require('./assets/background.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>ToDo List App</Text>
        <ToDoForm addTask={addTask} />
        <ToDoList tasks={tasks} setTasks={setTasks} completeTask={completeTask} />
        <CompletedList tasks={completedTasks} undoTask={undoTask} />
        <TouchableOpacity
          style={styles.manualButton}
          onPress={() => setShowManual(true)}
        >
          <Text style={styles.manualButtonText}>User Manual</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 10,
    margin: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  manualButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
    alignSelf: 'center',
  },
  manualButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
