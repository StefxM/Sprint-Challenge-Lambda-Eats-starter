import React from "react";
//import "./assets/pizza.jpg";
import "./index.css"


function HomePage() {

    return(
        // need to fix image source
        <div>
       <img className="pizzapic" src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Pizza_Margherita_stu_spivack.jpg" alt="pizza pic"/>
       <p>Offering "contactless" delivery!</p>
       </div>
    );
};

export default HomePage;