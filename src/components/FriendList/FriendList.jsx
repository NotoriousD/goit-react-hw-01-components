import React from "react";
import PropTypes from "prop-types";
import { FriendListItem } from "../FriendListItem";
import "./FriendList.scss";

const FriendList = ({ friends }) => {
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
export default { FriendList };
