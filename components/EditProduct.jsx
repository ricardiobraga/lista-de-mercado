import React, {useState, useEffect} from 'react';

import styles from './EditProduct.module.css';
import homeStyles from "../styles/Home.module.css";

import { supabaseClient } from '../client.js'

export default function EditProduct(props){
    
    const [post, setPost] = useState({name: ""});  
    const { name, qtt, price} = post; 
    
    


        
   function editAndSetProduct(name, qtt, price) {   

        props.editProduct(name)
        setPost({name: ""})


   }


   

    return(
        <div className={props.hide ? styles.bg : styles.hide}>
            <div className={styles.productContainer}>
                <a className={styles.btnClose} onClick={() => props.setEditPost(false, setPost({name: ""}))}>X</a>
                <h1 className={styles.titulo}>Editar produto</h1>
                <div className={styles.product}>
                    <p>Produto:</p>
                    <input type="text" value={name} onChange={ e => setPost({ ...post, name: e.target.value})} placeholder="Nome do Produto" />
                </div>

                
                <div className={styles.product}>
                    <br />
                    <a className={homeStyles.btn} onClick={() => editAndSetProduct(name)}>Atualizar</a>
                </div>
            
            </div>
        </div>
    )
}