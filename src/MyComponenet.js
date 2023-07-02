import React from 'react';
import Footbal from './Footbal';

const MyComponent = (brand) => {
    
    const myArray = ['Amin' , 'Amgad','Aziza' , 'Yasmine'];
    const array1 = [1 , 2 , 3];
    const array2 = [4 , 5 , 6];
    const array3Copy = [...array1 , ...array2]; // with spresd opreator
    const array4Copy = [array1 , array2]; // without
  return (
    <ul>
      {myArray.map((item, index) => (
        <li key={index}>{item.toUpperCase()}</li>
      ))}
      <li>{array3Copy}</li>
      <li>{array4Copy}</li>
      <li>{brand.brand}</li>
      <li>{brand.krl}</li>
      <li>{brand.carInfo.name}</li>
      <li>{brand.carInfo.age}</li>
      <Footbal />
    </ul>
  );
};

export default MyComponent;
