import React, {useState, useEffect} from 'react';

import styles from './NewProduct.module.css';
import homeStyles from "../styles/Home.module.css";

import { supabaseClient } from '../client.js'

export default function NewProduct(props){
    
    const [post, setPost] = useState({name: "", qtt: 0, price: 0});  
    const { name, qtt, price} = post; 
    const [ hide, sethide ] = useState(styles.hide);

    function postProduct(){
        props.createPost(post.name, post.qtt, post.price); 
            
        setPost({name: "", qtt: 0, price: 0});    }

        
   

    return(
        <div className={props.hide ? styles.bg : styles.hide}>
            <div className={styles.productContainer}>
                
                <a className={styles.btnClose} onClick={() => props.setHide(false)}>X</a>
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
                    <a className={homeStyles.btn} onClick={() =>postProduct()}>cadastrar</a>
                </div>
            
            </div>
        </div>
    )
}