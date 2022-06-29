import Link from 'next/link'
import styles from './menu.module.scss'

const linksArr = [
    {
        path: "/",
        label: "Home"
    },
    {
        path: "/syracuse-purchase-rehab-program",
        label: "Purchase Rehab Program"
    },
    {
        path: "/portfolio",
        label: "Portfolio"
    },
    {
        path: "/resources",
        label: "Resources"
    },
    {
        path: "/about-us",
        label: "About us"
    },
    {
        path: "/contact-us",
        label: "Contact us"
    }
];

const Menu = () => {
    return <nav className={styles.menu}>
        <ul className={styles.menu__list}>
            {linksArr.map((item, index) => {
                const {path, label} = item;
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