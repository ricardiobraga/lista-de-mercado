import React, {useState} from 'react';

import styles from './product.module.css';

export default function Product(props){

    function totalValue(){
        let price = parseFloat(props.price)
        
        return price * props.qtt
    }



    return(
        // product name, quantidade, preco
        
        
        <div className={styles.productContainer}>
            
            <div className={styles.product}>
                <input type="checkbox" name="" id="" />
            </div>

            <div className={styles.product}>
                <p>Produto:</p>
                <span>{props.name}</span>
            </div>

            <div className={styles.product}>
                <p>Quandidade:</p>
                <span>{props.qtt}</span>
            </div>

            <div className={styles.product}>
                <p>Preço:</p>
                <span>R$ {props.price}</span>
            </div>

            <div className={styles.product}>
                <p>Total:</p>
                <span>R$ {totalValue()}</span>
            </div>
        
        </div>



        

    )
}