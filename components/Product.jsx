import React, {useState} from 'react';

import styles from './product.module.css';

import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Product(props){
    
    const [styleControll, setStyleControll] = useState(styles.productName)
    

    function updateCheckBox(checkbox, callback){
         if (checkbox){
            setStyleControll(styles.productSelected)
         } else if (!checkbox){
            setStyleControll(styles.productName)
         } 
         
        // props.editProduct(props.name, checkbox)
        
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

            <div className={styleControll}>
                <span>{props.name}</span>
            </div>           
            <div className={styles.btn} onClick={() => sendInfo()}>
                <ModeEditIcon />
            </div>           
            <div className={styles.btn} onClick={() => props.deletePost(props.id)}>
                <DeleteIcon />
            </div>           
        
        </div>



        

    )
}