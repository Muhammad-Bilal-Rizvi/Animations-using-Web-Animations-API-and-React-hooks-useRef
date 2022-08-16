import logo from './logo.svg';
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";

// Links For WebAnimations
// https://hackernoon.com/creating-highly-performant-animations-using-web-animations-api-and-react-hooks-k92d3utf?source=rss
// https://github.com/wellyshen/use-web-animations
// https://use-web-animations.netlify.app/#animations
// https://animate.style/

// Commands to Installations
// $ yarn add @wellyshen/use-web-animations
// $ npm install --save @wellyshen/use-web-animations


/*
Explaining useRef Hook with useEffect
import { useEffect, useRef } from 'react';
function App() {
  const inputE1 = useRef(null);

  useEffect(()=> {
    inputE1.current.focus();
  },[]);

  return (
    <div className="App">
      <h1>Hello-World</h1>
      <input ref={inputE1} type="text" />
    </div>
  );
}
*/

// Explining useWebAnimations
function App() {
  const { ref, playState, getAnimation } = useWebAnimations({

  /*  sir Zeeshan Code
    keyframes: [
      { transform: "translate(0px)" },
      { transform: "translate(500px)" }
    ],
    timing: {
      duration: 3000,
    }
  */  
    // useWebAnimations Library Code
    keyframes: {
      transform: "translateX(0px)", background: "red", // Move by 0px
      transform: "translateX(500px)", background: "yellow" // Move by 500px
    },
    animationOptions: {
      duration: 3000, // Run for 1000ms
      iterations: 4, //"Infinity", // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
      //easing: "steps(4, end)"
    },
    onUpdate: ({ playState, animate, animation }) => {
      // Triggered when the animation enters the running state or changes state
      console.log("Play State", playState);
      console.log("animate", animate);
      console.log("animation", animation);
    },
  });

  return (
    <div >
      <div>Animation State: {playState}</div>
      <div ref={ref} style={{ background: "red", width: "100px", height: "100px" }}>
        Hello World
      </div>
      <button onClick={() => { getAnimation().play(); }}>Play</button>
      <button onClick={() => { getAnimation().pause(); }}>Pause</button>
    </div>
  );
};


/*
// Explining useWebAnimations Animate.css
//https://animate.style/
import useWebAnimations, {bounce} from "@wellyshen/use-web-animations";
//import useWebAnimations, {backInLeft} from "@wellyshen/use-web-animations";
// import useWebAnimations, {rotateOut} from "@wellyshen/use-web-animations";
function App() {
  const { ref, playState, getAnimation } = useWebAnimations({...bounce});
  //const { ref, playState, getAnimation } = useWebAnimations({...backInLeft});
  // const { ref, playState, getAnimation } = useWebAnimations({...rotateOut});
  return(
    <div>
      <div>Animation State: {playState}</div>
      <div ref={ref} style={{ background: "red", width: "100px", height: "100px"}}>
        Hello World
      </div>
    </div>
  );
}
*/

export default App;
