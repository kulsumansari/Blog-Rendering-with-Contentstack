
import React from 'react';
import { footerProps } from '../../utils/interface';
import styles from './Footer.module.css'

interface Props{
    footerData: footerProps
}
const Footer: React.FC <Props>=({footerData})=>{
        let {companyName , footer_logo, footerLinks} = footerData
        return(
        <footer className={styles.footer}>
             <div className={styles.companyLogo}>
                <img src={footer_logo.src} alt={footer_logo.alt} />
                <h1>{companyName}</h1>
            </div>
            <div>
                <p className={styles.footerLinkHead}>{}</p>
                <div className={styles.footerLink}>
                    {footerLinks.map((link)=>{
                        return (
                        <a key={link.linkId} href={link.linkHref} target={'_blank'}>
                            <i className={`fa ${link.linkIcon}`}></i>
                        </a>)
                    })}
                </div>
            </div>
           
        </footer>
    )
}

export default Footer;
