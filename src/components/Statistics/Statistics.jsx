import React from "react";
import PropTypes from "prop-types";
import faker from "faker";
import "./Statistics.scss";

export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title ? <h2 className="title">{title}</h2> : null}

      <ul
        className="stat-list"
        style={{
          gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
        }}
      >
        {stats.map(({ id, label, percentage }) => (
          <li
            className="item"
            key={id}
            style={{
              backgroundColor: faker.internet.color(),
            }}
          >
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
