import React, {useState} from 'react';
import cn from 'classnames'
import arrow from '../../assets/icons/down-arrow.png'
import loupe from '../../assets/icons/loupe.png'
import styles from './Sidebar.module.css'


const Sidebar = () => {
    const [selling, setSelling] = useState('');
    const [exchange, setExchange] = useState('');

    const setSellingRadio = (e:any) => {
        setSelling(e.target.value)
    };

    const setExchangeRadio = (e:any) => {
        setExchange(e.target.value)
    };

    const toggleShow = (id:string) => {
        let form:HTMLElement | null = document.getElementById(id);
        // @ts-ignore
        if (form.style.display === "none") {
            // @ts-ignore
            form.style.display = "block";
        } else {
            // @ts-ignore
            form.style.display = "none";
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h1>Filter</h1>
                <div className={styles.subtitle} onClick={() => toggleShow('sellingDrop')}>
                    <span>Selling Asset</span>
                    <img style={{width: 20, height: 20}} src={arrow} alt=''/>
                </div>

                <form id='sellingDrop' style={{display: 'none'}} className={styles.form}>
                    <input type='search'/>
                    <div className={styles.radioContainer}>
                        <div className={styles.radioItem}>
                            <input type='radio' checked={selling === 'ETC'} value='ETC' onChange={setSellingRadio}/>
                            <label>ETC</label>
                        </div>
                        <div className={styles.radioItem}>
                            <input type='radio' checked={selling === 'WBTC'} value='WBTC' onChange={setSellingRadio}/>
                            <label>WBTC</label>
                        </div>
                        <div className={styles.radioItem}>
                            <input type='radio' checked={selling === 'DAI'} value='DAI' onChange={setSellingRadio}/>
                            <label>DAI</label>
                        </div>
                        <div className={styles.radioItem}>
                            <input type='radio' checked={selling === 'LINK'} value='LINK' onChange={setSellingRadio}/>
                            <label>LINK</label>
                        </div>
                    </div>
                </form>

                <div className={styles.subtitle} onClick={() => toggleShow('exchangeDrop')}>
                    <span>Exchange Asset</span>
                    <img style={{width: 20, height: 20}} src={arrow} alt=''/>
                </div>

                <form id='exchangeDrop' style={{display: 'none'}} className={styles.form}>
                    <input type='search' className={styles.search}/>
                    <div>
                        <input type='radio' checked={exchange === 'ETC'} value='ETC' onChange={setExchangeRadio}/>
                        <label>ETC</label>
                        <input type='radio' checked={exchange === 'WBTC'} value='WBTC' onChange={setExchangeRadio}/>
                        <label>WBTC</label>
                        <input type='radio' checked={exchange === 'DAI'} value='DAI' onChange={setExchangeRadio}/>
                        <label>DAI</label>
                        <input type='radio' checked={exchange === 'LINK'} value='LINK' onChange={setExchangeRadio}/>
                        <label>LINK</label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Sidebar;