import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { initDB } from '../../db/database';
import { addExpense, getExpenses } from '../../db/expenses';

export default function HomeScreen() {
  const [expenses, setExpenses] = useState<any[]>([]);

  useEffect(() => {
    initDB();
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    const data = await getExpenses();
    setExpenses(data);
  };

  const handleAdd = async () => {
    const today = new Date().toISOString().split('T')[0];
    await addExpense(12.99, 'Food', 'Test Shawarma', 'Credit Card', today);
    await fetchExpenses();
  };

  return (
    <View style={styles.container}>
      <Button title="Add Test Expense" onPress={handleAdd} />
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>{`${item.date} | ${item.category} | $${item.amount}`}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    padding: 24,
  },
  item: {
    padding: 8,
    fontSize: 16,
  },
});
