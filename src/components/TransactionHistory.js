import { useAtom } from "@reatom/react";

import { Transaction } from "./Transaction";
import { transactionAtom } from "../reatom/atoms";

export const TransactionHistory = () => {
  const { transactions } = useAtom(transactionAtom);
  console.log(transactions);
  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};
