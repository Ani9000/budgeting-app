import db from './database';

// Add an expense
export const addExpense = async (
  amount: number,
  category: string,
  description: string,
  paymentMethod: string,
  date: string
) => {
  try {
    await db.runAsync(
      `INSERT INTO expenses (amount, category, description, payment_method, date)
       VALUES (?, ?, ?, ?, ?);`,
      [amount, category, description, paymentMethod, date]
    );
  } catch (err) {
    console.error('❌ Add expense error:', err);
  }
};

// Get all expenses
export const getExpenses = async (): Promise<any[]> => {
  try {
    const result = await db.getAllAsync('SELECT * FROM expenses ORDER BY date DESC;');
    return result;
  } catch (err) {
    console.error('❌ Get expenses error:', err);
    return [];
  }
};


