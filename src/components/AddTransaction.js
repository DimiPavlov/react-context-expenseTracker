import React, { useState } from "react";
import { useAction } from "@reatom/react";
import { addTransaction } from "../reatom/atoms";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const newTran = useAction(addTransaction);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 10000),
      text,
      amount: +amount,
    };
    console.log(newTransaction);
    setText("");
    setAmount("");
    return newTran(newTransaction);
  };
  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};
