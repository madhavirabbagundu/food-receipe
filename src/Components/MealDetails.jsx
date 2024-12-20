import React from "react";
import { useParams } from "react-router-dom";

function MealDetails(){
    const {mealid} = useParams();
    const [getData,setGetData] = React.useState([]);

    React.useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
         .then((res)=>res.json())
         .then((json)=>
            setGetData(json.meals))
         
    },[])
    console.log(getData)
         return(
            <>
            {
                getData.map((item)=>(
                    <div className="mealinfo">
                <img className = "mealImg"src = {item.strMealThumb}/>
            <div className="info">
             <h1>Receipe Details</h1>
             <button>{item.strMeal}</button>
             <h3 className="instr">Instructions:</h3>
             <p>{item.strInstructions}</p>
            </div>
            </div>
                ))
             }
           


             
            </>
        )
    
    }


export { MealDetails }