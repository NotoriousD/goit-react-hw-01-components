import React from "react";
import PropTypes from "prop-types";
import faker from "faker";
import "./Profile.scss";

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="user avatar" className="avatar" />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        {Object.entries(stats).map((item) => (
          <li key={faker.random.uuid()}>
            <span className="label">{item[0]}</span>
            <span className="quantity">{item[1]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default { Profile };
