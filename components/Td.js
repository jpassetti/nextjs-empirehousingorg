import styles from './table.module.scss'

const Td = ({children}) => {
    return <td className={styles.td}>{children}</td>
}
export default Td