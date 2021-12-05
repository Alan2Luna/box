import React from 'react';
import './Filter.css';

const Filter = ({ title, items }) => (
  <section className="filter">
    <h4 className="title-filter">{title}</h4>
    <ul>
      {items.map((item, index) => (
        <li className="list-item-checkbox">
          <label
            className="form-control"
            htmlFor={`checkbox-${title}-${index + 1}`}
          >
            <input
              id={`checkbox-${title}-${index + 1}`}
              className="input-filter"
              type="checkbox"
            />
            <span className="text-filter">{item}</span>
          </label>
        </li>
      ))}
    </ul>
  </section>
);

export default Filter;
