import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import blueFish from'./bluefish.svg';
import greenFish from'./greenfish.svg';
import blackFish from'./blackfish.svg';
import orangeFish from'./orangefish.svg';
import pinkFish from'./pinkfish.svg';
import redShrimp from'./redshrimp.svg';
import './App.css';


var fishList = [
  {fishName: 'Neon Tetra', phLevel: '7', hiding: 'false', tempRange: '27', src:blueFish},
  {fishName: 'Corey', phLevel: '7.5', hiding: 'true', tempRange: '25', src:greenFish},
  {fishName: 'Pleco', phLevel: '6.5', hiding: 'true', tempRange: '24', src:blackFish},
  {fishName: 'Cichlid', phLevel: '8', hiding: 'false', tempRange: '26', src:orangeFish},
  {fishName: 'Endlers', phLevel: '7', hiding: 'false', tempRange: '21', src:pinkFish},
  {fishName: 'Shrimp', phLevel: '6.5', hiding: 'true', tempRange: '22', src:redShrimp}
  ];

// var namesOfFish = fishList.map(fishList => fishList.fishName);
// var phOfFish = fishList.map(fishList => fishList.phLevel);
// var hideFish = fishList.map(fishList => fishList.hiding);
// var tempFish = fishList.map(fishList => fishList.tempRange);
// var srcFish = fishList.map(fishList => fishList.src);

function fishRender(fishObj){
    return (
      <div className="App">
        <div className="App-header">
          <img src={fishObj.src} className="App-logo" alt=":("/> <br />
          <button>{fishObj.fishName}</button>
        </div>
        <p className="App-intro">
        Ph Level: {fishObj.phLevel} <br />
        Hiding Places: {fishObj.hiding} <br />
        Temperature: {fishObj.tempRange} <br />
        </p>
      </div>
    );
}


// class ()

// some state => is fish on or off 

// if fish is on render PH, hiding place, temp, otherwise if fish is off, don't render import 
// -> function will be test if state is on, then if else statement to render

// there will be a button that changes the state of each fish (off/on)



// function Welcome(props) {
//   return <p>Hello, {props.name}</p>;
// }

function App() {
  return (
    <div>
      {fishList.map(fishRender)}
    </div>
  );
}

export default App;
