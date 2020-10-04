import React from "react";
import PropTypes from "prop-types";
import "./FriendListItem.scss";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      <span className={`status ${isOnline ? "status-on" : null}`}></span>
      <img className="avatar" src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default { FriendListItem };
