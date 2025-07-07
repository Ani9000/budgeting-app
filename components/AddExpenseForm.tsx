import React, { useState } from 'react';
import { SafeAreaView, TextInput, Button, StyleSheet, Text } from 'react-native';
import { Expense } from '../types/Expense';

type Props = {
  onSubmit: (expense: Expense) => void;
};

export default function AddExpenseForm({ onSubmit }: Props) {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handleSubmit = () => {
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount)) return alert('Amount must be a number');

    onSubmit({
      amount: parsedAmount,
      category,
      description,
      payment_method: paymentMethod,
      date,
    });

    // Optional: clear form
    setAmount('');
    setCategory('');
    setDescription('');
    setPaymentMethod('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Amount</Text>
      <TextInput
        value={amount}
        onChangeText={setAmount}
        keyboardType="decimal-pad"
        style={styles.input}
      />

      <Text>Category</Text>
      <TextInput value={category} onChangeText={setCategory} style={styles.input} />

      <Text>Description</Text>
      <TextInput value={description} onChangeText={setDescription} style={styles.input} />

      <Text>Payment Method</Text>
      <TextInput value={paymentMethod} onChangeText={setPaymentMethod} style={styles.input} />

      <Text>Date (YYYY-MM-DD)</Text>
      <TextInput value={date} onChangeText={setDate} style={styles.input} />

      <Button title="Save Expense" onPress={handleSubmit} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    gap: 12,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 6,
  },
});
