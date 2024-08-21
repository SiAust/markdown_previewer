import {useEffect, useState} from "react";
import INITIAL_STATE from "./initialState";

import './App.css';
import Editor from "./Editor"
import Preview from "./Preview"

function App() {
    const [input, setInput] = useState(INITIAL_STATE);
    const [output, setOutput] = useState(INITIAL_STATE);

    function handleInput(event) {
        event.preventDefault();
        setInput(event.target.value);
    }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Markdown Previewer</h1>
      </header>
      <main>
        < Editor handleInput={handleInput} inputVal={input} initialState={INITIAL_STATE}/>
        < Preview output={input}/>
      </main>
    </div>
  );
}

export default App;
