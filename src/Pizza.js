import React, { useState, useEffect } from "react";

import * as yup from "yup";

import axios from "axios";

const formSchema = yup.object().shape({
    name: yup.string()
        .min(2, "Must be at least 2 characters long")
        .required("Name is Required"),
    pizzaSize: yup.boolean()
        .oneOf([true]),
    sauces:yup.string(),
    toppings:yup.object().shape({
        tomato:yup.string(),
        
        chicken:yup.string(),
        
        pineapple:yup.boolean()
        .oneOf([true]),
        onions:yup.boolean()
        .oneOf([true]),
        mushrooms:yup.boolean()
        .oneOf([true]),
    }),
    instructions:yup.string()
});

const Pizza = () => {

    //state
    const [input, setInput] = useState({
        name:"",
        pizzaSize:"",
        sauces:"",
        toppings:"",
        instructions:""
    });
   const [post, setPost] = useState([]);

    const [error, setError] = useState({
        name:""
    });

    const [buttonDisabled, setButtonDisabled] = useState([]);

    useEffect(() => {
        formSchema.isValid(input).then(valid => {
          setButtonDisabled(!valid);
        });
      }, [input]);

    //changehandler and submit
    const changeHandler = event => {
        event.persist();
        validate(event)
        setInput({
            ...input, [event.target.name]: event.target.value
        });
    }

    const submit = (e) => {
        e.preventDefault();
        axios
            .post('https://reqres.in/api/users', input)
            .then(response => {
                setPost(response.data);              
            })
            .catch(err => {console.log(err.response);
            });
        }
    

    

   const validate = event =>{
    yup
        .reach(formSchema, event.target.name)
        .validate(event.target.value)
        .then(valid => {
            setError({
                ...error, [event.target.name]:""
            });
        })
        .catch(err => {
            setError({
                ...error,[event.target.name]: err.error
            });
        });
    };

    
    return(
        <div>
            <form onSubmit={submit}>
            {/*name box*/}
            <label htmlFor='name'>Name:<input type="name" name="name" value={input.name} onChange={changeHandler}/></label>
          

            {/*dropdown of pizza size*/}
            <label htmlFor='pizzaSize'> Pizza Size
                <select id="pizzaSize" name="pizzaSize"onChange={changeHandler}>
                    <option value="Bagel-bites">Bagel Bites</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="X-Large">X-Large</option>
                </select>
            </label>
            {/* list of sauces */}
            <label htmlFor='sauces'><h3> Choice of sauces:</h3>
            
            Original Red:<input type="radio" name="sauces" value="original-red" onChange={changeHandler}/>
            Garlic Ranch:<input type="radio" name="sauces" value="garlic-ranch" onChange={changeHandler}/>
            Bbq Sauce:<input type="radio" name="sauces" value="bbq" onChange={changeHandler}/>
            Spinach Alfredo:<input type="radio" name="sauces" value="spinach-alfredo" onChange={changeHandler}/>
            Buffalo:<input type="radio" name="sauces" value="buffalo" onChange={changeHandler}/>
            </label>
            {/*checklist of toppings*/}
            <label htmlFor='toppings'><h3>Toppings</h3>
            Tomato:
            <input name="toppings" type="checkbox" value="tomato" onChange={changeHandler}/>
            Chicken:
            <input name="toppings" type="checkbox" value="chicken" onChange={changeHandler}/>
            Pineapple:
            <input name="toppings" type="checkbox" value="pineapple" onChange={changeHandler}/>
            Onions:
            <input name="toppings" type="checkbox" value="onions" onChange={changeHandler}/>
            Mushrooms:
            <input name="toppings" type="checkbox" value="mushroom" onChange={changeHandler}/>
            </label>


            {/* text input for special instructions*/}
            <label htmlFor='instructions'><h3>Special instructions</h3></label>
            <input type="text" name="instructions" onChange={changeHandler} />
            {/*redefine setbuttondisabled function*/}
            <button onSubmit={buttonDisabled}>Add to order</button>
            {<pre>{JSON.stringify(post, null, 2)}</pre>}
            </form>
        </div>
    )

}
export default Pizza;