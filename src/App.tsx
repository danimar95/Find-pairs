import './App.css';
import React from 'react'

const App = () => {
  const list = [1,9,5,0,20,-4,12,16,7]; // array of integrers for testing purposes.
  const sum = 12; // desired sum example for testing purposes

  // Function that will console all the integrer sum pairs found in the array that match the "sum" variable only one time.
  // The function receives an array of integrers and a number
  const pairIntegrers = (list: number[], sum : number) => {
    // create a shallow copy of the original array which will be used along the function and modified each time a pair of integrers that match the sum variable is found.
    let intList = list.slice()
    /* Run a for loop that will check for each item in the array if an integrer exists that matches the difference between the "sum"
    variable and the current item.
    */
    for (let i = 0; i < intList.length; i++) {
      const j = sum - intList[i];
      if (intList.includes(j)) {
        console.log(`${intList[i]}, ${j}`) // console the pair of integrers that summed match the "sum" variable
        // find index of the difference integrer in the array to remove it from the next iterations in order to avoid repeated pairs of integrers.
        const index = intList.indexOf(j)
        if (index > -1) { // only splice array when item is found
          intList.splice(index, 1);
        }
      };
    };
  };

  pairIntegrers(list, sum); // call the function with suggested or any other testing parameters.

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Sample project. Please check the console.
        </p>
      </header>
    </div>
  );
};

export default App;
