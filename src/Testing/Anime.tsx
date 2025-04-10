import { animate, createScope, createSpring, createDraggable } from 'animejs';
import { useEffect, useRef, useState } from 'react';
import Procesador from "../assets/Img/Procesador.svg";
import './App.css';

const Anime: React.FC = () => {
  const root = useRef<HTMLDivElement>(null);
  const scope = useRef<any>(null);
  const [rotations, setRotations] = useState<number>(0);

  useEffect(() => {
    if (!root.current) return;
  
    scope.current = createScope({ root }).add((scope: any) => {
      // Every anime.js instances declared here are now scopped to <div ref={root}>

      // Created a bounce animation loop
      animate('.logo', {
        scale: [
          { to: 1.25, ease: 'inOut(3)', duration: 200 },
          { to: 1, ease: createSpring({ stiffness: 300 }) }
        ],
        loop: true,
        loopDelay: 250,
      });
      
      // Make the logo draggable around its center
      createDraggable('.logo', {
        container: [0, 0, 0, 0],
        releaseEase: createSpring({ stiffness: 200 })
      });

      // Register function methods to be used outside the useEffect
      scope.add('rotateLogo', (i: number) => {
        animate('.logo', {
          rotate: i * 360,
          ease: 'out(4)',
          duration: 1500,
        });
      });
    });

    // Properly cleanup all anime.js instances declared inside the scope
    return () => scope.current?.revert();
  }, []);

  const handleClick = () => {
    const i = rotations + 1;
    setRotations(i);
    // Animate logo rotation on click using the method declared inside the scope
    scope.current?.methods.rotateLogo(i);
  };

  return (
    <div ref={root}>
      <div className="large centered row">
        <img src={Procesador} className="logo react" alt="React logo" />
      </div>
      <div className="medium row">
        <fieldset className="controls">
          <button onClick={handleClick}>rotations: {rotations}</button>
        </fieldset>
      </div>
    </div>
  );
};

export default Anime; 