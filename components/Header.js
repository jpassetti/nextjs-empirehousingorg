import Link from 'next/link'
import Container from "./Container";
import Logo from "./Logo";
import Menu from './Menu';

const Header = ({menuItems}) => {
    return <header>
        <Container>
            <Link href="/">
                <a>
                <Logo />
                </a>
            </Link>
            <Menu menuItems={menuItems} />
        </Container>
    </header>
}
export default Header;