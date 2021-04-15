import react , {useState} from 'react';
import './App.css'


function App() {
  const emojiCollection = {
    "😊": "Smiling Emoji",
    "😂": "Laughining Emoji",
    "😍": "Loving Emoji",
    "😎": "Cool Emoji",
    "😔": "Sad Emoji",
    "😭": "Crying Emoji",
    "😮": "Shocked Emoji",
    "😉": "Winking Face",
    "😚": "Kissing Face with Closed Eyes",
"😙": "Kissing Face with Smiling Eyes",

"😀": "Grinning Face",
"😃": "Grinning Face with Big Eyes",
"😄": "Grinning Face with Smiling Eyes",
"😁": "Beaming Face with Smiling Eyes",
"😆": "Grinning Squinting Face",
"😅": "Grinning Face with Sweat",
  }
  const emojis = Object.keys(emojiCollection);

   const [meaning , setMeaning] = useState("Result")

  function emojiInputHandler(e) {
      if(emojiCollection[e.target.value]===undefined)
      setMeaning("Can't identify this emoji, use one of the emojis shown below")
      else
    setMeaning(emojiCollection[e.target.value]);
  }

  return (
    <div className="App">
        <input type="text" onChange={emojiInputHandler} placeholder="Enter one of the emoji's shown below "/>
       <h1>{meaning}</h1>
       <div>
       {emojis.map((e) => (
        <span
          key={e}
          style={{ fontSize: "30px", margin: "5px", cursor: "pointer" }}
        >
          {e}
        </span>
          ))}
          </div>
    </div>
  );
}

export default App;