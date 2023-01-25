import React from 'react'

const SpreadOprator = () => {
  //scenerio 1 
  //get full array 
  const fullname = ['one', 'two']
  console.log(...fullname);

  //scenerio 2
  //concatenate two arrays in third array 
  const array1 = ['one', 'two', 'three'];
  const array2 = ['four', 'five', 'six'];
  const array3 = [...array1, ...array2];
  console.log(array3);

  //scenerio 3
  //destructing of an array 

  const arrayy1 = ['one', 'two', 'three'];
  const [first, ...remaining] = arrayy1;
  console.log(first);
  console.log(remaining);

  return (
    <div>
      Spread Operator Usaage
    </div>
  )
}

export default SpreadOprator
