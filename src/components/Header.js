import { useContext, useState } from "react";
import { InputContext } from "../App";
import HeaderStyles from "./css/Header.module.css";

 const Header = () =>{

    const [value, setValue] = useState("");

    const {inputValue, setInputValue} = useContext(InputContext);

    const handleInputChange = e => setValue(e.target.value);

    const handleSubmit = () => {
      setInputValue(value);
      setValue("");
    };

    const handleInputKeyDown = (e) => {
      if(e.key === 'Enter'){
        setInputValue(value);
        setValue("");
      }
    };
    return (
      <div className={`${HeaderStyles.backGroundColor}`}>
        <div className="container mx-auto py-8">
          <h1 className={`${HeaderStyles.textHeader} text-5xl text-center `}>
            {" "}
            J DICTIONARY
          </h1>
          <p
            className={`${HeaderStyles.headerSub} text-center mt-9 mb-10 text-3xl `}
          >
            Look up the meanings of words you don't know.
          </p>

        {/* Input Area */}
          <div className="flex items-center justify-center mt-5">
            <div className="flex border-2 border-gray-200 rounded">
              <input
                type="text"
                placeholder="..."
                className="px-4 py-2 md:w-80"
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                value={value}
              />
              <button className={`${HeaderStyles.btnSearch} bg-stone-500 border-l px-4 py-2 text-white `} onClick={handleSubmit}>Search</button>
            </div>
          </div>
          {/* End of input area */}

        { inputValue && <h3 className={`${HeaderStyles.headerResult} text-center mt-4 `}> Meaning of: <span className="font-bold ml-1">{inputValue}</span></h3>
}
        </div>
      </div>
    );
  }


export default Header;