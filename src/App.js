import "./App.css";
import { AddTransaction } from "./components/AddTransaction";
import { Balance } from "./components/Balance";
import { ExpenseContainer } from "./components/ExpenseContainer";
import { Header } from "./components/Header";
import { TransactionHistory } from "./components/TransactionHistory";
// import { GlobalProvider } from "./context/GlobalState";
import { createStore } from "@reatom/core";
import { context } from "@reatom/react";

function App() {
  const store = createStore();
  return (
    <context.Provider value={store}>
      {/* <GlobalProvider> */}
      <Header />
      <div className="container">
        <Balance />
        <ExpenseContainer />
        <TransactionHistory />
        <AddTransaction />
      </div>
      {/* </GlobalProvider> */}
    </context.Provider>
  );
}

export default App;
