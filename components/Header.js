import Link from 'next/link'
import Container from "./Container";
import Logo from "./Logo";
import Menu from './Menu';

const Header = () => {
    return <header>
        <Container>
            <Link href="/">
                <a>
                <Logo />
                </a>
            </Link>
            <Menu />
        </Container>
    </header>
}
export default Header;