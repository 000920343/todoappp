import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function UserManual({ goBack }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Manual</Text>
      <ScrollView>
        {/* Adding a Task */}
        <View style={styles.section}>
          <Text style={styles.heading}>1. Adding a Task</Text>
          <Text style={styles.description}>
            - Enter your task in the input field at the top of the screen.
            {"\n"}- Press the "Add Task" button to add the task to the Pending Tasks list.
            {"\n"}- The task will appear in the list with a serial number and an action button.
          </Text>
        </View>

        {/* Marking a Task as Completed */}
        <View style={styles.section}>
          <Text style={styles.heading}>2. Marking a Task as Completed</Text>
          <Text style={styles.description}>
            - Press the "Mark as Done" button in the Pending Tasks list to mark a task as completed.
            {"\n"}- The task will automatically move to the Completed Tasks section at the bottom of the screen.
          </Text>
        </View>

        {/* Undoing a Completed Task */}
        <View style={styles.section}>
          <Text style={styles.heading}>3. Undoing a Completed Task</Text>
          <Text style={styles.description}>
            - Navigate to the Completed Tasks section.
            {"\n"}- Press the "Undo" button to move the task back to the Pending Tasks list.
          </Text>
        </View>

        {/* Viewing Completed Tasks */}
        <View style={styles.section}>
          <Text style={styles.heading}>4. Viewing Completed Tasks</Text>
          <Text style={styles.description}>
            - Scroll down to the Completed Tasks section to view all tasks marked as completed.
            {"\n"}- Each task is displayed with a serial number, description, and an Undo button.
          </Text>
        </View>

        {/* Removing a Task */}
        <View style={styles.section}>
          <Text style={styles.heading}>5. Removing a Task</Text>
          <Text style={styles.description}>
            - To delete a task permanently, press the "Remove" button in the Pending Tasks list.
            {"\n"}- The task will no longer appear in the list.
          </Text>
        </View>
      </ScrollView>

      {/* Go Back Button */}
      <TouchableOpacity style={styles.goBackButton} onPress={goBack}>
        <Text style={styles.goBackButtonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
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
  section: {
    marginBottom: 15,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50', // Green color for the section headings
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
  },
  goBackButton: {
    backgroundColor: '#FF5252', // Red button for Go Back
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
    alignSelf: 'center',
  },
  goBackButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
