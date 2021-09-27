import styles from './NavBar.module.css';
import {navbarProps} from '../../utils/interface'

interface Props{
    navData:navbarProps
}

const NavBar:React.FC <Props>= ({navData})=>{

    let { companyName,logoImage, navLinks} = navData;
    return(
         <div className={styles.navigation}>
             
            <div className={styles.companyLogo}>
                <img src={logoImage.src} alt={logoImage.alt} />
                <h1>{companyName}</h1>
                
            </div>
                             
            <div className={styles.hamburgerMenu}>
                <i className='fa fa-bars'></i>
            </div>
            
            <ul className={styles.navContainer}> 
                {
                    navLinks.map((link)=>{
                        return <li key={link.linkId} className={styles.navItem}>
                            {
                                <a href={link.linkHref} className={styles.navLink+ (link.isCta? ` ${styles.btn}`:'')}  > {link.linkTitle} </a>
                            }
                        </li>
                    })
                }
        </ul>
      </div>
    )
}
export default NavBar;