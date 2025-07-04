import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('expenses.db');

export const initDB = () => {
  db.execAsync(
    `CREATE TABLE IF NOT EXISTS expenses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      amount REAL NOT NULL,
      category TEXT NOT NULL,
      description TEXT,
      payment_method TEXT,
      date TEXT NOT NULL
    );`
  ).then(() => {
    console.log('✅ Table initialized');
  }).catch(err => {
    console.error('❌ Table init error:', err);
  });
};

export default db;