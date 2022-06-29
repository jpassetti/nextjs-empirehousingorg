
import { useState, useEffect } from 'react'

// next.js
import { useRouter } from 'next/router';
import Link from 'next/link'

// custom
import ButtonUI from './ButtonUI'
import Col from './Col'
import Container from './Container'
import Logo from './Logo'
import Menu from './Menu'
import Row from './Row'
import MobileMenu from './MobileMenu'

const Header = ({menuItems}) => {
    const router = useRouter();
    const [isMobileMenuVisible, setMobileMenuVisible] = useState(false)

    const closeMenu = () => {
        setMobileMenuVisible(false);
    };

    useEffect(() => {
        router.events.on('routeChangeStart', closeMenu);

        return () => router.events.off('routeChangeStart', closeMenu);
    }, [router.events]);

    return <header>
        <Container>
            <Row justifyContent="space-between" alignItems="center">
                <Col xs="9" sm="10">
                    <Link href="/">
                        <a>
                        <Logo />
                        </a>
                    </Link>
                </Col>
                <Col xs="3" sm="2" textAlign="right">
            <ButtonUI type="menu" clickHandler={() => {
                setMobileMenuVisible(true)
            }} />
                </Col>
                <Col xs="12" sm="12">
                    <Menu menuItems={menuItems} />
                </Col>
            </Row>
        </Container>
        {isMobileMenuVisible && 
            <MobileMenu menuItems={menuItems} clickHandler={() => {
                setMobileMenuVisible(false)
            }} />
        }
           
    </header>
}
export default Header;