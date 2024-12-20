import React from 'react'
import { Meals } from './Meals';

function Search(){
    const [search,setSearch] = React.useState('')
    const [data,setData] = React.useState();


    const handleSubmit = async()=>{
    //  e.preventDefault();

    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    const jsonData= await data.json()
         setData(jsonData.meals)
         console.log(jsonData.meals,"data")

    
    }
return(
    <>
    <h1>This is the search file</h1>
    {/* <form> */}
        <input type = "text"
        placeholder='Enter the food item'
        value = {search}
        onChange={(e) => setSearch(e.target.value)} 
        />
        {/* <br/> */}


        <button type = "submit" className='btn btn-primary' onClick = {handleSubmit}>Submit</button>
    {/* </form> */}
    <div>
        <Meals details = {data}/>
    </div>
    </>
)
}
export { Search }