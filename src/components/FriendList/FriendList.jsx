import React from "react";
import PropTypes from "prop-types";
import { FriendListItem } from "../FriendListItem/FriendListItem";
import "./FriendList.scss";

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map((friend) => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
