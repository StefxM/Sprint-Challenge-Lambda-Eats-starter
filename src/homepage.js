import React from "react";
//import "./assets/pizza.jpg";
import "./index.css"

import styled from "styled-components";

function HomePage() {

    const PizzaImg = styled.img `
        height: 60%;
        width: 60%
        
    `;

    return(
        // need to fix image source
        <div>
        
       <PizzaImg className="pizzapic" src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Pizza_Margherita_stu_spivack.jpg" alt="pizza pic"/>
       
       <p><h2>Offering "contactless" delivery!</h2></p>
       </div>
    );
};

export default HomePage;