import React from "react";

import "./index.css"

import styled from "styled-components";

function HomePage() {

    const PizzaImg = styled.img `
        height: 60%;
        width: 60%
        
    `;

    return(
        
        <div>
        
       <PizzaImg className="pizzapic" src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Pizza_Margherita_stu_spivack.jpg" alt="pizza pic"/>
       
       <p>Offering "contactless" delivery!</p>
       </div>
    );
};

export default HomePage;