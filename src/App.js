import React, { createContext } from 'react';
import CompA from './CompA';
 
const Name = createContext();

function App() {
  return(
    <>
    <Name.Provider value={"Vasanad"}>
      <CompA />
     </Name.Provider>
     </>
  );
  
}

export default App;
export {Name};
