import React, {useState, useEffect} from 'react';

import styles from './EditProduct.module.css';
import homeStyles from "../styles/Home.module.css";

import { supabaseClient } from '../client.js'

export default function EditProduct(props){
    
    const [post, setPost] = useState({name: "", qtt: 0, price: 0});  
    const { name, qtt, price} = post; 
    
    


        
   async function editProduct(name, qtt, price) {

    const { data, error } = await supabaseClient
        .from('produtos')
        .update({ name: name , qtt: qtt, price: price })
        .eq('id', props.productInfo)
        
        props.setEditPost(false);
        props.fetchPost(localStorage.getItem("listname"));
        
        setPost({name: "", qtt: 0, price: 0})


   }


   

    return(
        <div className={props.hide ? styles.bg : styles.hide}>
            <div className={styles.productContainer}>
                <a className={styles.btnClose} onClick={() => props.setEditPost(false, setPost({name: "", qtt: 0, price: 0}))}>X</a>
                <h1 className={styles.titulo}>Editar produto</h1>
                <div className={styles.product}>
                    <p>Produto:</p>
                    <input type="text" value={name} onChange={ e => setPost({ ...post, name: e.target.value})} placeholder="Nome do Produto" />
                </div>

                <div className={styles.product}>
                    <p>Quandidade:</p>
                    <input type="text" value={qtt} onChange={ e => setPost({ ...post, qtt: e.target.value})} placeholder="Nome do Produto" />
                </div>

                <div className={styles.product}>
                    <p>Preço:</p>
                    <input type="text" value={price} onChange={ e => setPost({ ...post, price: e.target.value})} placeholder="0,00" />
                </div>
                <div className={styles.product}>
                    <br />
                    <a className={homeStyles.btn} onClick={() =>editProduct(name, qtt, price)}>Atualizar</a>
                </div>
            
            </div>
        </div>
    )
}