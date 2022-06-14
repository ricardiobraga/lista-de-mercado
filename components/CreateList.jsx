import React, { useState } from 'react'
import styles from './createList.module.css';

export default function CreateList (props){
    const [listName, setListName] = useState(0)



    function setListCode(param){
        localStorage.setItem('listname', param) 
        
    }


    return(
        <form className={styles.createListContent}>
        <label> Acessar Lista<br />
          <input type="number" value={listName} placeholder='nome' onChange={e => setListName(e.target.value)} />
        </label>
        <button onClick={() => setListCode(listName)}  >Entrar</button>
      </form>
    )
}