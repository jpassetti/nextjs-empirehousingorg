import Link from 'next/link'
import styles from './menu.module.scss'

const Menu = ({menuItems}) => {
    return <nav className={styles.menu}>
        <ul className={styles.menu__list}>
            {menuItems.map((item, index) => {
                const {path, label} = item.node;
                return <li className={styles.menu__item} key={index}>
                    <Link href={path}>
                        <a className={styles.menu__anchor}>{label}</a>
                    </Link>
                </li>
            })}
        </ul>
    </nav>
}
export default Menu