import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AddExpenseForm from '../../components/AddExpenseForm';
import { addExpense } from '../../db/expenses';
import { useRouter } from 'expo-router';
import { Expense } from '../../types/Expense';

export default function AddScreen() {
  const router = useRouter();

  const handleSubmit = async (expense: Expense) => {
    await addExpense(
      expense.amount,
      expense.category,
      expense.description || '',
      expense.payment_method,
      expense.date
    );
    router.push('/'); // Go back to home
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={80} // Tweak if needed
      >
        <AddExpenseForm onSubmit={handleSubmit} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
