import React, { useState/*, useEffect*/ } from "react";

//import * as Yup from "yup";

function Pizza() {
    //state
    const [input, setInput] = useState({
        name:"",
        pizzaSize:"",
        sauces:"",
        toppings:"",
        instructions:""
    });
    //changehandler and submit
    const changeHandler = event => {
        setInput({
            ...input, [event.target.name]: event.target.value
        });
    };

    const submit = e => 
    {
        e.preventDefault();
    }
    /* yup schema
    const formSchema = Yup.object().shape({
        name: Yup
            .string()
            .min(2, "Must be at least 2 characters long")
            .required("Name is Required")
    });

    const [errors, setErrors] = useState({
        name:"",
    });

    useEffect(() => {
        formSchema.isValid(input).then(valid => {
            setButtonDisabled(!valid);
        });
    }, [input]);

    const inputChange = e => {
        e.persist();
    }

    Yup
        .reach(formSchema, e.target.name)
        .validate(e.target.value)
        .then(valid => {
            setErrors({
                ...errors, [e.target.name]:""
            });
        })
        .catch(err => {
            ...errors, 
            [e.target.name]: err.error()[0]
        });*/
        
    return(
        <div>
            <form onSubmit={submit}>
            {/*name box*/}
            <label>Name:<input type="text" name="name" value={input.name} onChange={changeHandler}/></label>
           {/* {errors.name.length > 2 ? (<p className="error">{errors.name}</p>) : null}*/}
            {/*dropdown of pizza size*/}
            <label> Pizza Size
                <select id="pizzaSize" name="pizzaSize"onChange={changeHandler}>
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