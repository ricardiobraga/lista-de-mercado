
import react, { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function IconDoubt(){
    const [isUp, setIsUp] = useState(false);
    const [iconContent, setContent] = useState("?");
    const [stylesChange, setStylesChange] = useState(styles.ide);

    useEffect(() => {
        changeIcon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isUp])

    function changeIcon(){
        
        isUp ? setStylesChange(styles.doubtIconSquare) : setStylesChange(styles.hide);        
    }
    
    return(
        <>
           <div className={styles.doubtIcon}>
                <span 
                    onMouseEnter={() => setIsUp(true)}
                    onMouseLeave={() => setIsUp(false)}
                    >?
                </span>
                <span className={stylesChange}>
                    Se não tiver um número de acesso você pode criar uma nova lista
                </span>
            </div> 

           
        </>
    )
}