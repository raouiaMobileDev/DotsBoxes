import React from 'react';
import style from './Toolbar.module.css';


const toolbar = props => (

    <header className={style.Toolbar}>
      <div className={style.NameGame}> Dots and Boxes</div>
       {/* <div> Name of the game</div> 
       <  nav>
            ...
            </nav>*/}
       
      <nav>
      <form>
      <ul className={style.UlItems}>

      <li className={style.UlItems}> <input type="text" name="player1" value="Name of player 1" /> </li>

      <li className={style.UlItems}> <input type="text" name="player2" value="Name of player 2"/> </li>

      <li className={style.UlItems}> <input type="submit" value="Start gaming" /> </li>
      
    </ul>
    </form>

         </nav>
    </header>
)

export default toolbar;