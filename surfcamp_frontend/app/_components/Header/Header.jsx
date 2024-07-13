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
            <img src="../../assets/icons/surfcamp-logo.svg" alt="logo" />
            <ul className='header__nav'>                
                {navItems.map((item) => (
                    <li key={item.slug}>
                        <Link href={`/${item.slug}`}>{item.display}</Link>
                    </li>
                ))}
            </ul>
            <Link href='/events' className='btn btn--black btn--small'>BOOK NOW</Link>
        </header>
    )
};

export default Header;