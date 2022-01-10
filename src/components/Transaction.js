import { useAction } from "@reatom/react";
import { deleteTransaction } from "../reatom/atoms";

export const Transaction = ({ transaction }) => {
  const deleteTran = useAction(deleteTransaction);

  return (
    <li className={transaction.amount > 0 ? "plus" : "minus"}>
      {transaction.text} <span>${transaction.amount}</span>
      <button
        onClick={() => {
          return deleteTran(transaction.id);
        }}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
