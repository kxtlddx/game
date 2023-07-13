import { useState } from "react";
import Brush from "../assets/Brush.svg";
import Logo from "../assets/Logo.svg"
import Mail from "../assets/Mail.svg"
import Menu from "../assets/Menu.svg"
import Music from "../assets/Music.svg"
import Person from "../assets/Person.svg"
import Photo from "../assets/Photo.svg"
import Plane from "../assets/Plane.svg"
import Card from "./Card";

function Cards({ setTurns, onFinish, onLose }) {
  const [items, setItems] = useState([

    { id: 1, img: Brush, stat: "" },
    { id: 1, img: Brush, stat: "" },
    { id: 2, img: Logo, stat: "" },
    { id: 2, img: Logo, stat: "" },
    { id: 3, img: Mail, stat: "" },
    { id: 3, img: Mail, stat: "" },
    { id: 4, img: Menu, stat: "" },
    { id: 4, img: Menu, stat: "" },
    { id: 5, img: Music, stat: "" },
    { id: 5, img: Music, stat: "" },
    { id: 6, img: Person, stat: "" },
    { id: 6, img: Person, stat: "" },
    { id: 7, img: Photo, stat: "" },
    { id: 7, img: Photo, stat: "" },
    { id: 8, img: Plane, stat: "" },
    { id: 8, img: Plane, stat: "" },
  ].sort(() => Math.random() - 0.5))

  const [prev, setPrev] = useState(-1)

  function check(current) {
    if (current === prev) {
      return;
    }
    if (items[current].id === items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
    setTurns(turns => {
      if (turns === 19) {
        setTimeout(onLose, 2000);
      }
      return turns + 1;
    });
    if (items.every(item => item.stat === "correct")) {
      setTimeout(onFinish, 2000);
    }
  }

  const [lastClickTime, setLastClickTime] = useState(0);

  function handleCLick(id) {
    const currentTime = new Date().getTime();
    if (currentTime - lastClickTime < 1000) {
      return;
    }
    setLastClickTime(currentTime);
    if (items[id].stat === "correct") {
      return;
    }
    if (prev === -1) {
      items[id].stat = "active"
      setItems([...items])
      setPrev(id)
    } else {
      check(id)
    }
  }

  return (
    <div className='cards'>
      {items.map((item, index) => (
        <Card key={index} item={item} id={index} handleCLick={handleCLick} />
      ))}
    </div>
  )
}

export default Cards