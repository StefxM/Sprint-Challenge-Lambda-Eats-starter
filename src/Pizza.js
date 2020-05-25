import React, { useState } from "react";

function Pizza() {
    const [input, setInput] = useState({
        name:"",
        pizzaSize:"",
        sauces:"",
        toppings:"",
        instructions:""
    });
    const changeHandler = event => {
        setInput({
            ...input, [event.target.name]: event.target.value
        });
    };

    const submit = event => 
    {
        event.preventDefault();
    }

    return(
        <div>
            <form onSubmit={submit}>
            {/*name box*/}
            <label>Name:<input type="text" name="name" value={input.name} onChange={changeHandler}/></label>
            {/*dropdown of pizza size*/}
            <label> Pizza Size
                <select id="pizzasize" name="pizzasize"onChange={changeHandler}>
                    <option value="Bagel BItes">Bagel BItes</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="X-Large">X-Large</option>
                </select>
            </label>
            {/* list of sauces */}
            <label><h3> Choice of sauces:</h3>
            
            Original Red:<input type="radio" name="sauces" onChange={changeHandler}/>
            Garlic Ranch:<input type="radio" name="sauces" onChange={changeHandler}/>
            Bbq Sauce:<input type="radio" name="sauces" onChange={changeHandler}/>
            Spinach Alfredo:<input type="radio" name="sauces" onChange={changeHandler}/>
            Buffalo:<input type="radio" name="sauces" onChange={changeHandler}/>
            </label>
            {/*checklist of toppings*/}
            <label><h3>Toppings</h3>
            Tomato:
            <input name="toppings" type="checkbox" value="yes" onChange={changeHandler}/>
            Chicken:
            <input name="toppings" type="checkbox" value="yes" onChange={changeHandler}/>
            Pineapple:
            <input name="toppings" type="checkbox" value="yes" onChange={changeHandler}/>
            Extra Cheese:
            <input name="toppings" type="checkbox" value="yes" onChange={changeHandler}/>
            Mushrooms:
            <input name="toppings" type="checkbox" value="yes" onChange={changeHandler}/>
            </label>


            {/* text input for special instructions*/}
            <label>Special Instructions</label>
            <input type="text" name="instructions" onChange={changeHandler} />

            <button>Add to order</button>
            </form>
        </div>
    );
};

export default Pizza;