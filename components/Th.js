import styles from './table.module.scss'

const Th = ({children}) => {
    return <th className={styles.th}>{children}</th>
}
export default Th