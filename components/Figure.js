import styles from './figure.module.scss'

const Figure = ({children}) => {
    return <figure className={styles.figure}>{children}</figure>
}
export default Figure