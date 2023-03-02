import React from 'react'
import styles from './FunctionsPage.module.css'

import lapis from '../img/icons/lapis.svg'
import quadrado from '../img/icons/quadrado.svg'
import grupo from '../img/icons/grupo.svg'
import layers from '../img/icons/layers.svg'

function FunctionPage() {
    return(
        <div className={styles.function}>
        <div className={styles.title}>
        <h1>Funcionalidades<span>.</span></h1>
        <div className={styles.icons}>
        <img src={lapis} alt=""/>
        <img src={quadrado} alt=""/>
        <img src={layers} alt=""/>
        <img src={grupo} alt=""/>
        <a>Rapidez nas atualizações do sistema</a>
        <a>Rapidez nas atualizações do sistema</a>
        <a>Rapidez nas atualizações do sistema</a>
        <a>Rapidez nas atualizações do sistema</a>
        <div className={styles.description}>
        
       
        </div>
        </div>
        </div>
        </div>
    )
}

export default FunctionPage