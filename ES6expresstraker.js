function main() {
  class ExpenseTracker {
    // ? Private properties
    #expenses;
    #income;

    // ? Constructor
    constructor(income) {
      this.#income = income;
      this.#expenses = [];
    }

    // ? Private method to calculate total expenses
    #calculateTotalExpenses() {
      return this.#expenses.reduce((total, expense) => total + expense.amount, 0);
    }

    // ? Public method to add an expense
    addExpense(name, amount, date) {
      const newExpense = { name, amount, date };
      this.#expenses.push(newExpense);
    }

    // ? Public method to calculate remaining balance
    calculateBalance() {
      const totalExpenses = this.#calculateTotalExpenses();
      return this.#income - totalExpenses;
    }
  }

  // ? Testing the class
  const tracker = new ExpenseTracker(5000);
  tracker.addExpense("Rent", 1000, "2021-10-01");
  tracker.addExpense("Groceries", 500, "2021-10-02");
  console.log(tracker.calculateBalance()); // should output 3500

  return ExpenseTracker;
}
