
import styles from './product.module.css';

export default function Total(props){

    function totalValue(array){
        let total = 0
          array.map( (item, i) => {
          let price = parseFloat(item.price)
          total += (price * item.qtt)
        })
        
        return total
    }



    return(
        // product name, quantidade, preco
        
        
        
           <div className={styles.total}>
                Total: R$ {totalValue(props.products).toFixed(2)}
           </div>    
        



        

    )
}