import styles from './table.module.scss'

const Tr = ({children}) => {
    return <tr className={styles.tr}>{children}</tr>
}
export default Tr