import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { InputContext } from "../App";
import { Antonym } from "./Antonym";
import { Example } from "./Example";
import MeaningList from "./MeaningList";
import { Synonym } from "./Synonym";
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
    return (
      <div className="flex flex-col space-y-3 animate-pulse-4s p-4 mx-auto max-w-2xl">
        <div className="h-10 bg-gray-300 mt-20 rounded-md"></div>
        <div className="h-40 bg-gray-300 mt-5 rounded-md"></div>
        <div className="h-8 bg-gray-300 mt-5 rounded-md"></div>
        <div className="h-6 bg-gray-300 mt-5 rounded-md"></div>
      </div>
    );
   }
   if(error){
    return <h1 className="text-center text-5xl font-bold">Cannot find</h1>;
   }
  return (
    <div className="container mx-auto p-4 max-w-2xl">
      {respone && (
        <div className="">
        <h3 className="text-2xl font-bold mt-4">Meaning & Definitions:</h3>
        <MeaningList mean={respone}/>
        <h3 className="text-2xl font-bold mt-4">Example:</h3>
        <Example mean={respone}/>
        <h3 className="text-2xl font-bold mt-4">Synonym:</h3>
        <Synonym mean={respone}/>
        <h3 className="text-2xl font-bold mt-4">Antonym:</h3>
        <Antonym mean={respone}/>
      </div>
      )
      }
    </div>
  );
};

export default ResultList;
