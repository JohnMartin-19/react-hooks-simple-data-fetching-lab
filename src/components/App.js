// create your App component here
import React, { useEffect,useState } from "react";

function App(){
    const [image,setImage] = useState(null)

    useEffect(()=>{
        fetch(`https://corsproxy.io/?https://dog.ceo/api/breeds/image/random`, {
            mode: 'cors',
            headers: { 'Content-Type': 'application/json'},
            method: "GET",
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setImage(data.message)
            })
    },[])
     if(!image){
        return <h2>Loading....</h2>
     }
    return(
        <div>
            <p>Here is your Image</p>
            <img src={image} alt="just a dog!"/>
        </div>
    )
}


export default App