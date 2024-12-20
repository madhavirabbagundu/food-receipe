import React from "react";
import { NavLink } from "react-router-dom";

function Meals({details}){
    // console.log(details,"details")
    return(
        <>
        <div>
        <div className = "row">
        
        {
            !details ? "": details.map((item)=>{
                return(
                <div className="col-md-4" id = {item.id}>
                    <div class = "card" style = {{"width":"80%","margin":"13%"}}>
                    <img src = {item.strMealThumb} class = "card-img-top" alt = "Card image cap"/>
                    <div class = "card-body">
                        <center>
                         <h5 class = "card-title">{item.strMeal}</h5>
                         <NavLink to = {`/${item.idMeal}`}>
                         <button class = "btn btn-primary">Buy</button>
                         </NavLink>
                        </center>
                       </div>
                </div>
                
                </div>
                )
})
        }
        </div>
        </div>
        </>
    )
}
export { Meals }