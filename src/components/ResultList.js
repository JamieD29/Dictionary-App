import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { InputContext } from "../App";
axios.defaults.baseURL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

const ResultList = () => {
  const {inputValue, setInputValue} = useContext(InputContext);
  const [respone, setRespone] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

    const fetchData = async (param) => {
        try{
            setLoading(true);
            const res = await axios(`${param}`);
            setRespone(res.data);
            setError(null)
        } catch (err){
          setError(err);
        }finally{
          setLoading(false);
        }
    };

    useEffect(()=>{
      if(inputValue.length){
        fetchData(inputValue)
      }
    }, [inputValue]);

   if(loading){
    return <h1 className="text-center text-5xl font-bold">Loading...</h1>
   }
   if(error){
    return <h1 className="text-center text-5xl font-bold">Cannot find</h1>;
   }
  return (
    <div className="container mx-auto p-4 max-w-2xl">
      {respone && (
        <div className="">
        <h3 className="text-2xl font-bold mt-4">Meaning & Definitions:</h3>
        <h3 className="text-2xl font-bold mt-4">Example:</h3>
        <h3 className="text-2xl font-bold mt-4">Synonym:</h3>
        <h3 className="text-2xl font-bold mt-4">Antonym:</h3>
      </div>
      )
      }
    </div>
  );
};

export default ResultList;
