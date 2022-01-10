import { useAtom } from "@reatom/react";

import { transactionAtom } from "../reatom/atoms";

export const ExpenseContainer = () => {
  const { transactions } = useAtom(transactionAtom);

  const totalAmount = transactions.map((transaction) => transaction.amount);
  const income = totalAmount
    .filter((transaction) => transaction > 0)
    .reduce((acc, cur) => {
      return acc + cur;
    })
    .toFixed(2);

  const expense = Math.abs(
    totalAmount
      .filter((transaction) => transaction < 0)
      .reduce((acc, cur) => {
        return acc + cur;
      })
      .toFixed(2)
  );

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -${expense}
        </p>
      </div>
    </div>
  );
};
