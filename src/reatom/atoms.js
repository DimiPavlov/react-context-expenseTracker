import { declareAction, declareAtom } from "@reatom/core";

export const addTransaction = declareAction("addTransaction");
export const deleteTransaction = declareAction("deleteTransaction");

// export const deleteTransHandler = bind(deleteTransaction);

const inistialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

export const transactionAtom = declareAtom(inistialState, (on) => [
  on(addTransaction, (state, payload) => ({
    ...state,
    transactions: [...state.transactions, payload],
  })),
  on(deleteTransaction, (state, payload) => ({
    ...state,
    transactions: state.transactions.filter((transaction) => {
      return transaction.id !== payload;
    }),
  })),
]);
