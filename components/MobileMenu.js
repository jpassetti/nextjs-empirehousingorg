import styles from './mobilemenu.module.scss'
import Link from 'next/link'
import ButtonUI from './ButtonUI'

const MobileMenu = ({menuItems, clickHandler}) => {
    return <div className={styles.mobile_menu}>
       <ButtonUI type="close" clickHandler={clickHandler}/>
       <ul className={styles.list}>
            {menuItems.map((item, index) => {
                const {path, label} = item.node;
                return <li key={index} className={styles.item}>
                    <Link href={path}>
                        <a className={styles.anchor}>{label}</a>
                    </Link>
                </li>
            })}
       </ul>
    </div>
}
export default MobileMenu