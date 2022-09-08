import './App.css';
import {FaFutbol} from 'react-icons/fa';
import {FaStar} from 'react-icons/fa';
import React, {useState} from "react";


const footballers = {
Strikers: [
  {name:"Robert Lewandowski",
   rating:"4.8/5" 
  },  
  {name:"Kylian Mbappe",
  rating:"4.9/5" 
  },
  {name:"Leo Messi",
  rating:"5/5" 
  }

],
Defenders: [
  {name:"Sergio Ramos",
  rating:"4/5"
  },
  {name:"Marquinhos",
  rating:"4.5/5" 
  },
  {name:"Van Dijk",
   rating:"5/5" 
  }


],
 Midfielders: [
  {name:"Toni Kroos",
  rating:"4.5/5"
  },
  {name:"Kevin De bruyne",
   rating:"5/5" 
  },
  {name:"Veratti",
  rating:"5/5" 
  }

]
};

function App() {
  //const [positions,setPositions] = useState(Object.keys(footballers));
  const [output,setOutput] = useState("Strikers");

  function showplayers(element){
    setOutput(element);
    //console.log(output);
 
  }
    
    
  return (
   <div className='parentContainer'> 
  <div
  style={{fontSize:"42px",fontWeight:"600",padding:"2.5vh 5% 1vh 5%",fontFamily:"secondone"}}
  ><FaFutbol/>  Soccer Stars</div>

  <div
  style={{fontSize:"20px",fontWeight:"400",padding:"2.5vh 5%",marginBottom:"2.5vh"}}
  >Checkout these pro fotballers. Select a position to get started.</div>
 
  {Object.keys(footballers).map(element=>{
    return(
      <span
      key={element}
      onClick={() => showplayers(element)}
      >
        <button
        style={{fontSize:"16px",width:"20%",marginLeft:"35px"}}
        >{element}</button>
      </span>
    )
  })}
  <hr style={{width:"90%"}}></hr>
  <div>
    <ul
    style={{listStyleType:"none"}}
    >
      {footballers[output].map((player) => {
        console.log(player.name);
        return(
          <li 
            style={{fontSize:"18px",padding:"10px",/*border:"1px solid red",*/borderRadius:"5px",
            width:"auto",margin:"30px 10px -10px -5px"}}
            key={player.name}>
            {player.name}
            <br></br>
            <FaStar
            style={{fontSize:"14px",paddingTop:"5px"}}
            /> {player.rating}
          </li>
        )
      })}
    </ul>

  </div>
  </div>
  );
}

export default App;
