import React from 'react';

import Hoc from '../hoc/Hoc';
import Toolbar from '../Toolbar/Toolbar';
import styles from './Layout.module.css';



const layout = (props) =>(

   <Hoc>
     {/* <div>  Game name, start button, 2 inputs for the names of each player</div>*/}

     <Toolbar/>
    <main className={styles.Content}>
        {props.children}
    </main>
  </Hoc>
);

export default layout;