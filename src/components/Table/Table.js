import React from 'react';

const Table = ({
  cols,
  rows,
}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {cols.map(col => <th key={col} scope="col">{col}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, id) => (
          <tr key={id}>
            {cols.map(col => (
              <td key={col}>{row[col]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
