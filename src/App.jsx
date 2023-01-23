import { useEffect, useState } from 'react'
import './App.css'
import Button from './components/Button/Button'
import Show from './components/Show/Show'

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);


  useEffect(() => {
    const last = localStorage.getItem("last");
    const open = localStorage.getItem("open");
    if (last === "number" && parseInt(open) === 0) {
        setResult(eval(input));
    }
  }, [input])

  return (
    <div className="App">
      <h1>Sir Company</h1>
      <Show 
        className="input"
        input={input}
      />

      <Show 
        className="result"
        input={result}
      />


      <div className="keyboard">
        <Button
          className="btn simbol"
          text="("
          func={(e) => {
            const last = localStorage.getItem("last");
            const open = localStorage.getItem("open");
            if (last === "simbol"){
              setInput(input + e.currentTarget.id);
              localStorage.setItem("last", "simbol");
              localStorage.setItem("open", (parseInt(open) + 1));;
            } 
          }
        }
        />

        <Button
          className="btn simbol"
          text=")"
          func={(e) => {
            const last = localStorage.getItem("last");
            const open = localStorage.getItem("open");
            if (last === "number"){
              setInput(input + e.currentTarget.id);
              localStorage.setItem("last", "number");
              localStorage.setItem("open", (parseInt(open) - 1))
            }   
          }
        }
        />

        <Button
          className="btn simbol"
          text="%"
          func={(e) => {
            const last = localStorage.getItem("last");
            if (last === "number"){
              setInput(input + e.currentTarget.id);
              localStorage.setItem("last", "simbol");
            }   
          }
        }
        />

        <Button
          className="btn del"
          text="del"
          func={(e) => {
            setInput("");
            setResult("");
            localStorage.setItem("last", "simbol");
            localStorage.setItem("open", 0)
          }
        }
        />

        <Button
          className="btn number"
          text="7"
          func={(e) => {
            setInput(input + e.currentTarget.id);
            localStorage.setItem("last", "number");
          }
        }
        />

        <Button
          className="btn number"
          text="8"
          func={(e) => {
            setInput(input + e.currentTarget.id);
            localStorage.setItem("last", "number");
          }
        }
        />

        <Button
          className="btn number"
          text="9"
          func={(e) => {
            setInput(input + e.currentTarget.id);
            localStorage.setItem("last", "number");
          }
        }
        />

        <Button
          className="btn simbol"
          text="/"
          func={(e) => {
            const last = localStorage.getItem("last");
            if (last === "number"){
              setInput(input + e.currentTarget.id);
              localStorage.setItem("last", "simbol");
            } 
          }
        }
        />

        <Button
          className="btn number"
          text="4"
          func={(e) => {
            setInput(input + e.currentTarget.id);
            localStorage.setItem("last", "number");
          }
        }
        />

        <Button
          className="btn number"
          text="5"
          func={(e) => {
            setInput(input + e.currentTarget.id);
            localStorage.setItem("last", "number");
          }
        }
        />

        <Button
          className="btn number"
          text="6"
          func={(e) => {
            setInput(input + e.currentTarget.id);
            localStorage.setItem("last", "number");
          }
        }
        />

        <Button
          className="btn simbol"
          text="*"
          func={(e) => {
            const last = localStorage.getItem("last");
            if (last === "number"){
              setInput(input + e.currentTarget.id);
              localStorage.setItem("last", "simbol");
            } 
          }
        }
        />

        <Button
          className="btn number"
          text="1"
          func={(e) => {
            setInput(input + e.currentTarget.id);
            localStorage.setItem("last", "number");
          }
        }
        />

        <Button
          className="btn number"
          text="2"
          func={(e) => {
            setInput(input + e.currentTarget.id);
            localStorage.setItem("last", "number");
          }
        }
        />

        <Button
          className="btn number"
          text="3"
          func={(e) => {
            setInput(input + e.currentTarget.id);
            localStorage.setItem("last", "number");
          }
        }
        />

        <Button
          className="btn simbol"
          text="-"
          func={(e) => {
            const last = localStorage.getItem("last");
            if (last === "number"){
              setInput(input + e.currentTarget.id);
              localStorage.setItem("last", "simbol");
            } 
          }
        }
        />

        <Button
          className="btn simbol"
          text="."
          func={(e) => {
            const last = localStorage.getItem("last");
            if (last === "number"){
              setInput(input + e.currentTarget.id);
              localStorage.setItem("last", "simbol");
            } 
          }
        }
        />

        <Button
          className="btn number"
          text="0"
          func={(e) => {
            setInput(input + e.currentTarget.id);
            localStorage.setItem("last", "number");
          }
        }
        />

        <Button
          className="btn equal"
          text="="
          func={(e) => {
            setInput(result)
            localStorage.setItem("last", "symbol");
            localStorage.setItem("open", 0)  
          }
        }
        />

        <Button
          className="btn simbol"
          text="+"
          func={(e) => {
            const last = localStorage.getItem("last");
            if (last === "number"){
              setInput(input + e.currentTarget.id);
              localStorage.setItem("last", "simbol");
            } 
          }
        }
        />   
      </div>
      <p className='copy'>made by Gustavo Silva</p>
    </div>
  )
}

export default App
