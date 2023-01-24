import { useEffect, useState } from 'react'
import './App.css'
import Button from './components/Button/Button'
import Show from './components/Show/Show'

import click1Src from  './assets/sounds/click1.mp3'
import click2Src from './assets/sounds/click2.mp3'
import click3Src from './assets/sounds/click2.mp3'
import clickDelSrc from './assets/sounds/clickDel.mp3'
import clickEqualSrc from './assets/sounds/clickEqual.mp3'

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

  
  const click1 = new Audio(click1Src);
  const clickNone = new Audio(click2Src);
  const click3 = new Audio(click3Src);
  const click = [click1, click3];
  const clickDel = new Audio(clickDelSrc);
  const clickEqual = new Audio(clickEqualSrc);

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
              localStorage.setItem("number", false);
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
              localStorage.setItem("pointer", true);
              localStorage.setItem("number", true);
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
            localStorage.setItem("number", true);

          }
        }
        />

        <Button
          className="btn number"
          text="7"
          func={(e) => {
            if (localStorage.getItem("number") === "true") {
              click[Math.floor(Math.random() * 2)].play()
              setInput(input + e.currentTarget.id);
              localStorage.setItem("last", "number");
              localStorage.setItem("zero", true);
              localStorage.setItem("asterisk", 0);
            }
          }
        }
        />

        <Button
          className="btn number"
          text="8"
          func={(e) => {
            if (localStorage.getItem("number") === "true") {
              click[Math.floor(Math.random() * 2)].play()
              setInput(input + e.currentTarget.id);
              localStorage.setItem("last", "number");
              localStorage.setItem("zero", true);
              localStorage.setItem("asterisk", 0);
            }
          }
        }
        />

        <Button
          className="btn number"
          text="9"
          func={(e) => {
            if (localStorage.getItem("number") === "true") {
              click[Math.floor(Math.random() * 2)].play()
              setInput(input + e.currentTarget.id);
              localStorage.setItem("last", "number");
              localStorage.setItem("zero", true);
              localStorage.setItem("asterisk", 0);
            }
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
              localStorage.setItem("number", true);
            }else {clickNone.play()} 
          }
        }
        />

        <Button
          className="btn number"
          text="4"
          func={(e) => {
            if (localStorage.getItem("number") === "true") {
              click[Math.floor(Math.random() * 2)].play()
              setInput(input + e.currentTarget.id);
              localStorage.setItem("last", "number");
              localStorage.setItem("zero", true);
              localStorage.setItem("asterisk", 0);
            }
          }
        }
        />

        <Button
          className="btn number"
          text="5"
          func={(e) => {
            if (localStorage.getItem("number") === "true") {
              click[Math.floor(Math.random() * 2)].play()
              setInput(input + e.currentTarget.id);
              localStorage.setItem("last", "number");
              localStorage.setItem("zero", true);
              localStorage.setItem("asterisk", 0);
            }
          }
        }
        />

        <Button
          className="btn number"
          text="6"
          func={(e) => {
            if (localStorage.getItem("number") === "true") {
              click[Math.floor(Math.random() * 2)].play()
              setInput(input + e.currentTarget.id);
              localStorage.setItem("last", "number");
              localStorage.setItem("zero", true);
              localStorage.setItem("asterisk", 0);
            }
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
              localStorage.setItem("number", true);
            }else {clickNone.play()}
          }
        }
        />

        <Button
          className="btn number"
          text="1"
          func={(e) => {
            if (localStorage.getItem("number") === "true") {
              click[Math.floor(Math.random() * 2)].play()
              setInput(input + e.currentTarget.id);
              localStorage.setItem("last", "number");
              localStorage.setItem("zero", true);
              localStorage.setItem("asterisk", 0);
            }
          }
        }
        />

        <Button
          className="btn number"
          text="2"
          func={(e) => {
            if (localStorage.getItem("number") === "true") {
              click[Math.floor(Math.random() * 2)].play()
              setInput(input + e.currentTarget.id);
              localStorage.setItem("last", "number");
              localStorage.setItem("zero", true);
              localStorage.setItem("asterisk", 0);
            }
          }
        }
        />

        <Button
          className="btn number"
          text="3"
          func={(e) => {
            if (localStorage.getItem("number") === "true") {
              click[Math.floor(Math.random() * 2)].play()
              setInput(input + e.currentTarget.id);
              localStorage.setItem("last", "number");
              localStorage.setItem("zero", true);
              localStorage.setItem("asterisk", 0);
            }
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
              localStorage.setItem("number", true);
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
            if (last === "number" && pointer === "true" && localStorage.getItem("number") === "true"){
              setInput(input + e.currentTarget.id);
              localStorage.setItem("last", "simbol");
              localStorage.setItem("pointer", false)
              localStorage.setItem("number", true);
            }else {clickNone.play()} 
          }
        }
        />

        <Button
          className="btn number"
          text="0"
          func={(e) => {
            const zero = localStorage.getItem("zero");

            if (zero === "true" && localStorage.getItem("number") === "true") {
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
              localStorage.setItem("number", true);
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
