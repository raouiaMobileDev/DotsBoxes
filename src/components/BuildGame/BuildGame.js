import React from 'react';
import style from './BuildGame.module.css';
import point from '../../assets/point.png'


const buildGame = props => (

    
      <div className={style.PointList}>

      <ul>
      <li> <img src={point} className={style.Point} alt="Point" /> </li>
      <li> <img src={point} className={style.Point} alt="Point" /> </li>
      <li> <img src={point} className={style.Point} alt="Point" /> </li>
      <li> <img src={point} className={style.Point} alt="Point" /> </li>
      </ul>


      <ul>
      <li> <img src={point} className={style.Point} alt="Point" /> </li>
      <li> <img src={point} className={style.Point} alt="Point" /> </li>
      <li> <img src={point} className={style.Point} alt="Point" /> </li>
      <li> <img src={point} className={style.Point} alt="Point" /> </li>
      </ul>

      <ul>
      <li> <img src={point} className={style.Point} alt="Point" /> </li>
      <li> <img src={point} className={style.Point} alt="Point" /> </li>
      <li> <img src={point} className={style.Point} alt="Point" /> </li>
      <li> <img src={point} className={style.Point} alt="Point" /> </li>
      </ul>

      <ul>
      <li> <img src={point} className={style.Point} alt="Point" /> </li>
      <li> <img src={point} className={style.Point} alt="Point" /> </li>
      <li> <img src={point} className={style.Point} alt="Point" /> </li>
      <li> <img src={point} className={style.Point} alt="Point" /> </li>
      </ul>

      




      </div>
     
)

export default buildGame;