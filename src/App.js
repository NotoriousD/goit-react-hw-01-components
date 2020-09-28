import React from "react";
import "./App.css";
import { Profile } from "./components/Profile/Profile";
import { Statistics } from "./components/Statistics/Statistics";
import { FriendList } from "./components/FriendList/FriendList";
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory";
import user from "./user.json";
import statistical from "./statistical-data.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

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
