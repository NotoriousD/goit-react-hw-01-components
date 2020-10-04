import React from "react";
import "./App.css";
import { Profile } from "./components/Profile";
import { Statistics } from "./components/Statistics";
import { FriendList } from "./components/FriendList";
import { TransactionHistory } from "./components/TransactionHistory";
import user from "./data/user.json";
import statistical from "./data/statistical-data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

export const App = () => {
  return (
    <>
      <div className="container">
        <Profile {...user} />
        <Statistics title={"uploads stats"} stats={statistical} />
        <FriendList friends={friends} />
        <TransactionHistory transactions={transactions} />
      </div>
    </>
  );
};
