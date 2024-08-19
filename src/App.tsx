import React, { useState } from "react";
import Body, {initial} from "./compnents/Body";
import { FormDataControl } from "./Contexts/FormData";
import { FormControl } from "./Contexts/FormControl";
import { FormData } from "./compnents/RegForm";
function App() {
  const [count, setCount] = useState<number>(0);
  const [data,setData]=useState<FormData>(initial)
  return (
    <>
      <FormControl.Provider value={{ count, setCount }}>
        <FormDataControl.Provider value={{data,setData}}>
          <Body />
        </FormDataControl.Provider>
      </FormControl.Provider>
    </>
  );
}

export default App;
