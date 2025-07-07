import React, { useState, useCallback } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet } from 'react-native';
import { getExpenses } from '../../db/expenses';
import { useFocusEffect } from '@react-navigation/native';

export default function HomeScreen() {
  const [expenses, setExpenses] = useState<any[]>([]);

  const fetchExpenses = async () => {
    const data = await getExpenses();
    setExpenses(data);
  };

  useFocusEffect(
    useCallback(() => {
      fetchExpenses();
    }, [])
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {`${item.date} | ${item.category} | ${item.description} | ${item.payment_method} | $${item.amount}`}
          </Text>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  item: {
    marginBottom: 12,
    fontSize: 16,
  },
});
