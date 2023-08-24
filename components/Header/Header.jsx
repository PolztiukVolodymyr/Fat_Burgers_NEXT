import Link from 'next/link';
import { GiHamburger } from 'react-icons/gi';

const Header = () => {
    return (
        <header>
            <div>
                <GiHamburger />
            </div>
            <nav>
                <Link href="/">Головна</Link>
                <Link href="/about">Про нас</Link>
                <Link href="/burgers">Наші бургери</Link>
                <Link href="/reviews">Відгуки</Link>
            </nav>
        </header>
    );
};

export default Header;
