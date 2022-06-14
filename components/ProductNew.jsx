import React, {useState, useEffect} from 'react';

import styles from './product.module.css';

import { supabaseClient } from '../client.js'

export default function ProductNew(props){
    
    const [post, setPost] = useState({name: "", qtt: 0, price: 0});  
    const { name, qtt, price} = post; 

    function postProduct(){
        props.createPost(post.name, post.qtt, post.price); 
            
        setPost({name: "", qtt: 0, price: 0});
    }

   

    return(
        // product name, quantidade, preco
        <div className={styles.productContainer}>
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
                <button onClick={() =>postProduct()}>cadastrar</button>
            </div>
        
        </div>
    )
}