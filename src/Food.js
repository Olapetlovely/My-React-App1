import React, {useState} from "react";

function Food() {
    // rendering list
    const food1 = "Orange";
    const food2 = "Banana";

    // useState for food

    const [foods, setFoods] = useState(["Apple", "Banana", "Orange"])

    function handleAddFood() {
        const newFood = document.getElementById("food-input").value;
        document.getElementById("food-input").value = ""; 
        setFoods(f => [...f, newFood]);
    }

    function handleRemovedFood(index) {
        setFoods(foods.filter((_, i) => i !== index))
    } 

    return(
        <div className="food-items">
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2}</li>
        </ul>

        <h2>List of Food</h2>
        <ul>{foods.map((food, index) => <li key ={index} onClick = {() => handleRemovedFood(index)}>{food}</li>)}</ul>
        <input id= "food-input" type="text"/>
        <button className="button" onClick={handleAddFood}>Add Food</button>

        </div>
    )
}

export default Food