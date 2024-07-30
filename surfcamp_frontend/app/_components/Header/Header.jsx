import Link from 'next/link';

const Header = ({ }) => {
    const navItems = [
        {
            display: 'the camp.',
            slug: '/',
        },
        {
            display: 'the experience.',
            slug: 'experience',
        },
        {
            display: 'the blog.',
            slug: 'blog',
        } 
    ];

    return (
        <header className='header'>
            <Link href='/'>
                <svg className='header__logo'>
                    <use xlinkHref="../../assets/icons/surfcamp-logo.svg"></use>
                </svg>
            </Link>
            <ul className='header__nav'>                
                {navItems.map((item) => (
                    <li key={item.slug}>
                        <Link href={`/${item.slug}`}>
                            <h5>{item.display}</h5>
                        </Link>
                    </li>
                ))}
            </ul>
            <Link href='/events' className='btn btn--black btn--small'>BOOK NOW</Link>
        </header>
    )
};

export default Header;