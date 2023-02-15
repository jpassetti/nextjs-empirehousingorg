import Container from './Container'
import styles from './footer.module.scss'

const Footer = () => {
    return <footer className={styles.footer}>
        <Container>
            Copyright 2023 Empire Housing and Development Corporation.
        </Container></footer>
}
export default Footer;