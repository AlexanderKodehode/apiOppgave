import React from "react";
import axios from "axios";
import { useState} from "react";
import { useEffect } from "react";

const CatFactPage = () => {
    const [data, setData] = useState();
    const [apiErorr, setApiErorr] = useState();
    
    const getData = () =>{
        axios.get("https://catfact.ninja/facts")
        .then(
            (res) =>{
        setData(res.data.data);
        })
        .catch((res) =>{
            setApiErorr(res);
        })
    }

    useEffect(() => {
        getData();
    }, []);
    

    if(data){
        console.log(data)
        return(
            <>
            <h2>Cat Fact Page</h2>
            <textConteiner>
                {data.map((item, idx) => {
                    return <p key={idx}>{item.fact}</p>;
                })}
            </textConteiner>
            </>
        )
    } 
    else if(apiErorr){
        console.log(apiErorr);
        return(
            <>
            <h2>Cat Fact Page</h2>
            <textConteiner>
                <p> The api failed to load, pleas try agein</p>
            </textConteiner>
            </>
        )
    } 
    else{
        return(
            <>
            <h2>Cat Fact Page</h2>
            <textConteiner>
                <p>The page is loading, hold on</p>
            </textConteiner>
            </>
        )
    }
}

export default CatFactPage