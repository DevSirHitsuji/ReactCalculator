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

  
  const click1 = new Audio('./assets/sounds/click1.mp3');
  const clickNone = new Audio('./assets/sounds/click2.mp3');
  const click3 = new Audio('./assets/sounds/click3.mp3');
  const click = [click1, click3];
  
  const clickDel = new Audio('./assets/sounds/clickDel.mp3');
  const clickClear = new Audio('./assets/sounds/clickClear.mp3');
  const clickEqual = new Audio('./assets/sounds/clickEqual.mp3');

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
              localStorage.setItem("open", (parseInt(open) + 1));
              localStorage.setItem("zero", true);
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
            if (last === "number" && parseInt(open) > 0){
              setInput(input + e.currentTarget.id);
              localStorage.setItem("last", "number");
              localStorage.setItem("open", (parseInt(open) - 1))
              localStorage.setItem("asterisk", 0);
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
              localStorage.setItem("pointer", true)
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
            localStorage.setItem("zero", false)
            localStorage.setItem("asterisk", 2);
            localStorage.setItem("pointer", true)
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
            localStorage.setItem("asterisk", 0);
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
            localStorage.setItem("asterisk", 0);
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
            localStorage.setItem("asterisk", 0);
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
              localStorage.setItem("pointer", true)
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
            localStorage.setItem("asterisk", 0);
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
            localStorage.setItem("asterisk", 0);
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
            localStorage.setItem("asterisk", 0);
          }
        }
        />

        <Button
          className="btn simbol"
          text="*"
          func={(e) => {
            click[Math.floor(Math.random() * 2)].play();
            const last = localStorage.getItem("last");
            const asterisk = localStorage.getItem("asterisk");
            if (last === "number" || parseInt(asterisk) < 2) {
              setInput(input + e.currentTarget.id);
              localStorage.setItem("asterisk", (parseInt(asterisk) + 1));
              localStorage.setItem("last", "simbol");
              localStorage.setItem("pointer", true)
            }else {clickNone.play()}
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
            localStorage.setItem("zero", true);
            localStorage.setItem("asterisk", 0);
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
            localStorage.setItem("asterisk", 0);
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
            localStorage.setItem("asterisk", 0);
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
              localStorage.setItem("pointer", true)
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
            const pointer = localStorage.getItem("pointer");
            if (last === "number" && pointer === "true"){
              setInput(input + e.currentTarget.id);
              localStorage.setItem("last", "simbol");
              localStorage.setItem("pointer", false)
            }else {clickNone.play()} 
          }
        }
        />

        <Button
          className="btn number"
          text="0"
          func={(e) => {
            const zero = localStorage.getItem("zero");

            if (zero === "true") {
              click[Math.floor(Math.random() * 2)].play()
              setInput(input + e.currentTarget.id);
              localStorage.setItem("last", "number");
              localStorage.setItem("zero", true);
              localStorage.setItem("asterisk", 0);
            }else {clickNone.play()}
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
              localStorage.setItem("pointer", true)
            }else if (toString(result) === "NaN") {
              setInput("")
              setResult("")
              localStorage.setItem("last", "simbol");
              localStorage.setItem("open", 0);
              localStorage.setItem("zero", false)
              localStorage.setItem("pointer", true)
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
              localStorage.setItem("pointer", true)
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
