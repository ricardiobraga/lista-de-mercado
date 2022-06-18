import React, {useState} from 'react';

import styles from './product.module.css';

export default function Product(props){
    
    const [styleControll, setStyleControll] = useState(styles.productName)
    

    function updateCheckBox(param){
         if (param){
            setStyleControll(styles.productSelected)
         } else if (!param){
            setStyleControll(styles.productName)
         }     
        
    }

    function sendInfo(){
        props.setProductInfo(props.id)
        props.setEditPost(true)
    }



    return(
        // product name, quantidade, preco  
        
        <div className={styles.productContainer}>
            
            <div className={styles.productCheckBox}>
                <input type="checkbox"  onChange={(e) => updateCheckBox(e.target.checked)} />
            </div>

            <div className={styleControll} onClick={() => sendInfo()}>
                <span>{props.name}</span>
            </div>           
        
        </div>



        

    )
}