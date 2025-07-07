export type Expense = {
  id?: number;
  amount: number;
  category: string;
  description?: string;
  payment_method: string;
  date: string;
};