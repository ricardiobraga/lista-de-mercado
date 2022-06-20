import React, {useState} from 'react'
import styles from './product.module.css';

export default function Total(props){
    const [valor, setValor] = useState([0,0])
    const [total, setTotal] = useState(0)

    const convertValue =  new Intl.NumberFormat("pt-BR", { style: 'currency' , currency: 'BRL'} ).format(valor)

    function totalValue(array){
        let total = 0
          array.map( (item, i) => {
          let price = parseFloat(item.price)
          total += (price * item.qtt)
        })
        
        return total
    }

    function CheckComa(param){
        if(param.contains(",")){

        }
    }

    

    return(
        // product name, quantidade, preco
        
        
        
           <div className={styles.total}>
                <input className={styles.inputValue} type="number" placeholder='0,00' value={valor} onChange={(e) => setValor(e.target.value)} /> 
                {convertValue}               
                <button> + </button>
                <button> - </button>
                valor total: R$ 
                {/* {totalValue(props.products).toFixed(2)} */}
           </div>    
        



        

    )
}