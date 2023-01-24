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

  
  const click1 = new Audio('./src/assets/sounds/click1.mp3');
  const clickNone = new Audio('./src/assets/sounds/click2.mp3');
  const click3 = new Audio('./src/assets/sounds/click3.mp3');
  const click = [click1, click3];
  
  const clickDel = new Audio('./src/assets/sounds/clickDel.mp3');
  const clickClear = new Audio('./src/assets/sounds/clickClear.mp3');
  const clickEqual = new Audio('./src/assets/sounds/clickEqual.mp3');

  return (
    <div className="App">
      <h1>Sir Company</h1>
      <Show 
        display="input"
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
            click[Math.floor(Math.random() * 2)].play()
            const last = localStorage.getItem("last");
            const open = localStorage.getItem("open");
            if (last === "simbol"){
              setInput(input + e.currentTarget.id);
              localStorage.setItem("last", "simbol");
              localStorage.setItem("open", (parseInt(open) + 1));;
            }else {clickNone.play()}
          } 
        }
        />

        <Button
          className="btn simbol"
          text=")"
          func={(e) => {
            click[Math.floor(Math.random() * 2)].play()
            const last = localStorage.getItem("last");
            const open = localStorage.getItem("open");
            if (last === "number"){
              setInput(input + e.currentTarget.id);
              localStorage.setItem("last", "number");
              localStorage.setItem("open", (parseInt(open) - 1))
            }else {clickNone.play()}   
          }
        }
        />

        <Button
          className="btn simbol"
          text="%"
          func={(e) => {
            click[Math.floor(Math.random() * 2)].play()
            const last = localStorage.getItem("last");
            if (last === "number"){
              setInput(input + e.currentTarget.id);
              localStorage.setItem("last", "simbol");
            }else {clickNone.play()}   
          }
        }
        />

        <Button
          className="btn del"
          text="del"
          func={(e) => {
            clickDel.play()
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
            click[Math.floor(Math.random() * 2)].play()
            setInput(input + e.currentTarget.id);
            localStorage.setItem("last", "number");
          }
        }
        />

        <Button
          className="btn number"
          text="8"
          func={(e) => {
            click[Math.floor(Math.random() * 2)].play()
            setInput(input + e.currentTarget.id);
            localStorage.setItem("last", "number");
          }
        }
        />

        <Button
          className="btn number"
          text="9"
          func={(e) => {
            click[Math.floor(Math.random() * 2)].play()
            setInput(input + e.currentTarget.id);
            localStorage.setItem("last", "number");
          }
        }
        />

        <Button
          className="btn simbol"
          text="/"
          func={(e) => {
            click[Math.floor(Math.random() * 2)].play()
            const last = localStorage.getItem("last");
            if (last === "number"){
              setInput(input + e.currentTarget.id);
              localStorage.setItem("last", "simbol");
            }else {clickNone.play()} 
          }
        }
        />

        <Button
          className="btn number"
          text="4"
          func={(e) => {
            click[Math.floor(Math.random() * 2)].play()
            setInput(input + e.currentTarget.id);
            localStorage.setItem("last", "number");
          }
        }
        />

        <Button
          className="btn number"
          text="5"
          func={(e) => {
            click[Math.floor(Math.random() * 2)].play()
            setInput(input + e.currentTarget.id);
            localStorage.setItem("last", "number");
          }
        }
        />

        <Button
          className="btn number"
          text="6"
          func={(e) => {
            click[Math.floor(Math.random() * 2)].play()
            setInput(input + e.currentTarget.id);
            localStorage.setItem("last", "number");
          }
        }
        />

        <Button
          className="btn simbol"
          text="*"
          func={(e) => {
            click[Math.floor(Math.random() * 2)].play()
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
            click[Math.floor(Math.random() * 2)].play()
            setInput(input + e.currentTarget.id);
            localStorage.setItem("last", "number");
          }
        }
        />

        <Button
          className="btn number"
          text="2"
          func={(e) => {
            click[Math.floor(Math.random() * 2)].play()
            setInput(input + e.currentTarget.id);
            localStorage.setItem("last", "number");
          }
        }
        />

        <Button
          className="btn number"
          text="3"
          func={(e) => {
            click[Math.floor(Math.random() * 2)].play()
            setInput(input + e.currentTarget.id);
            localStorage.setItem("last", "number");
          }
        }
        />

        <Button
          className="btn simbol"
          text="-"
          func={(e) => {
            click[Math.floor(Math.random() * 2)].play()
            const last = localStorage.getItem("last");
            if (last === "number"){
              setInput(input + e.currentTarget.id);
              localStorage.setItem("last", "simbol");
            }else {clickNone.play()} 
          }
        }
        />

        <Button
          className="btn simbol"
          text="."
          func={(e) => {
            click[Math.floor(Math.random() * 2)].play()
            const last = localStorage.getItem("last");
            if (last === "number"){
              setInput(input + e.currentTarget.id);
              localStorage.setItem("last", "simbol");
            }else {clickNone.play()} 
          }
        }
        />

        <Button
          className="btn number"
          text="0"
          func={(e) => {
            click[Math.floor(Math.random() * 2)].play()
            setInput(input + e.currentTarget.id);
            localStorage.setItem("last", "number");
          }
        }
        />

        <Button
          className="btn equal"
          text="="
          func={(e) => {
            clickEqual.play()
            if (result === "Infinity"){
              setInput("(1/0)")
              localStorage.setItem("last", "number");
              localStorage.setItem("open", 0)  
            }else if (toString(result === "NaN")) {
              setInput("")
              setResult("")
              localStorage.setItem("last", "simbol");
              localStorage.setItem("open", 0);
            }else {
              setInput(result)
              localStorage.setItem("last", "number");
              localStorage.setItem("open", 0);
            }

          }
        }
        />

        <Button
          className="btn simbol"
          text="+"
          func={(e) => {
            click[Math.floor(Math.random() * 2)].play()
            const last = localStorage.getItem("last");
            if (last === "number"){
              setInput(input + e.currentTarget.id);
              localStorage.setItem("last", "simbol");
            }else {clickNone.play()} 
          }
        }
        />   
      </div>
      <p className='copy'>made by Gustavo Silva</p>
    </div>
  )
}

export default App
