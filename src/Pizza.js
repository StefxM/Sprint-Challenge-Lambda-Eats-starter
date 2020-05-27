import React, { useState, useEffect } from "react";

import * as yup from "yup";

import axios from "axios";



const Pizza = () => {

    //state
    const [input, setInput] = useState({
        name:"",
        size:"",
        sauces:"",
        toppings:"",
        instructions:""
    });

    //changehandler and submit
    const changeHandler = event => {
        event.persist();
        setInput({
            ...input, [event.target.name]: event.target.value
        });
    };
    const [post, setPost] = useState([]);
   
    const submit = (e) => 
    {
        e.preventDefault();
        axios
            .post('https://reqres.in/api/users', input)
            .then(res => {
                setPost(res.data);
            })
            .catch(err => console.log(err.response));
    }
    //yup schema
    const formSchema = yup.object().shape({
        name: yup.string()
            .min(2, "Must be at least 2 characters long")
            .required("Name is Required")
    });

    const [error, setError] = useState({
        name:"",
    });

    const validate = (e) => {
        yup.reach(formSchema, e.target.name)
        .validate(e.target.value)
        .then( valid => {
            setError({
                ...error, [e.target.name]:""
            })
        .catch(err => {
            console.log(error)
        });

    });

        const [buttonDisabled, setButtonDisabled] = useState(true);

        useEffect(() => {
        formSchema.isValid(input).then(valid => {
        setButtonDisabled(!valid);
        });
        }, [input]);
        
    return(
        <div>
            <form onSubmit={submit}>
            <label htmlFor='name'>Name:<input type="text" name="name" value={input.name} onChange={changeHandler}/></label>
           {error.name.length > 2 ? (<p className="error">{error.name}</p>) : null}
            {/*dropdown of pizza size*/}
            <label htmlFor='size'> Pizza Size
                <select id="size" name="size"onChange={changeHandler}>
                    <option value="Bagel BItes">Bagel BItes</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="X-Large">X-Large</option>
                </select>
            </label>
            {/* list of sauces */}
            <label htmlFor='sauces'><h3> Choice of sauces:</h3>
            
            Original Red:<input type="radio" name="sauces" onChange={changeHandler}/>
            Garlic Ranch:<input type="radio" name="sauces" onChange={changeHandler}/>
            Bbq Sauce:<input type="radio" name="sauces" onChange={changeHandler}/>
            Spinach Alfredo:<input type="radio" name="sauces" onChange={changeHandler}/>
            Buffalo:<input type="radio" name="sauces" onChange={changeHandler}/>
            </label>
            {/*checklist of toppings*/}
            <label htmlFor='toppings'><h3>Toppings</h3>
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
            <label htmlFor='instructions'>Special Instructions</label>
            <input type="text" name="instructions" onChange={changeHandler} />

            <button disabled={buttonDisabled}>Add to order</button>
            
            </form>
        </div>
    );
    }}
export default Pizza;