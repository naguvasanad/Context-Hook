import React from "react";
import { Name } from "./App";

const CompC = () =>{
    return 
       (
        <>
        
        <Name.Consumer>
            {() =>{
                    return <h1>hello Nagaraj</h1>;
            }}
        </Name.Consumer>
        </>
    );
   
}

export default CompC;