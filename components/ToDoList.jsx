import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function ToDoList({ tasks, setTasks, completeTask }) {
  return (
   
    <View style={styles.list}>
      <Text style={styles.title}>Tasks To Do</Text>
      {/* Table Header */}
      <View style={styles.tableHeader}>
        <Text style={styles.headerCell}>Serial Number</Text>
        <Text style={styles.headerCell}>Task</Text>
        <Text style={styles.headerCell}>Action</Text>
      </View>

      {/* Table Rows */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.row}>
            {/* Serial Number */}
            <Text style={styles.cell}>{item.id}</Text>
            {/* Task Description */}
            <Text style={styles.cell}>{item.text}</Text>
            {/* Mark as Done Button */}
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => completeTask(item.id)}
            >
              <Text style={styles.actionButtonText}>Mark as Done</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#f5f5f5',
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#4CAF50',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    color: '#333',
  },
  actionButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
