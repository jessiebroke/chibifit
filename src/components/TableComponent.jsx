import React from 'react';
import './TableComponent.css';
import './checkbox.css'

const TableComponent = () => {
  return (
    <div className="container">
    <table className="content">
      <thead>
        <tr>
          <th colspan="4">Day 1</th>
          <th colspan="4">Set</th>
        </tr>
      </thead>
      <tbody>
        <tr className="special-row">
          <td>Workout</td>
          <td>Sets</td>
          <td>Reps</td>
          <td>Pounds</td>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
        </tr>
        <tr>
          <td>Pullups</td>
          <td>4</td>
          <td>20</td>
          <td>0</td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
        </tr>
        <tr>
          <td>Reverse Crunches</td>
          <td>4</td>
          <td>20</td>
          <td>0</td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
        </tr>
        <tr>
          <td>Banded Face Pulls</td>
          <td>4</td>
          <td>20</td>
          <td>0</td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
        </tr>
        <tr>
          <td>DB Press or Pushups</td>
          <td>4</td>
          <td>20</td>
          <td>0</td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
        </tr>
        <tr>
          <td>DB Shrugs</td>
          <td>4</td>
          <td>20</td>
          <td>0</td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
        </tr>
        <tr>
          <td>DB Shoulder Press</td>
          <td>4</td>
          <td>20</td>
          <td>0</td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
        </tr>
        <tr>
          <td>DB Curls</td>
          <td>4</td>
          <td>20</td>
          <td>0</td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
        </tr>
        <tr>
          <td>DB Lateral Raise</td>
          <td>4</td>
          <td>20</td>
          <td>0</td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
        </tr>
        <tr>
          <td>DB Angled Front Raise</td>
          <td>4</td>
          <td>20</td>
          <td>0</td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
          <td><input type="checkbox" /></td>
        </tr>                                             
      </tbody>
    </table>
    </div>
  );
};

export default TableComponent;