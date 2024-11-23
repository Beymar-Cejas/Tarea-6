import React from 'react';

const BuyList: React.FC = () => {
  const buyList = [
    'Controller',
    'Bread',
    'Water',
    'Notebook',
    'Math Book',
    'Choco Bar',
    'Milk'
  ];

  return (
    <ul>
      {buyList.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default BuyList;
