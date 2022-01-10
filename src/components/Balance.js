import { useAtom } from "@reatom/react";

import { transactionAtom } from "../reatom/atoms";

export const Balance = () => {
  const { transactions } = useAtom(transactionAtom);

  const totalAmount = transactions.map((transaction) => transaction.amount);
  const sum = totalAmount.reduce((acc, cur) => acc + cur).toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${sum}</h1>
    </>
  );
};
