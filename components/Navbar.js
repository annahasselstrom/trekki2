import Link from 'next/link';
import Image from 'next/image'
import logo from '../public/logo.png'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
               <h1>Trekki</h1>
               {/*<Image 
                 src={logo} width={128} height={77}
                 alt="Logotype"
               />*/}
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/our-offer"><a>Our Offer</a></Link>
            <Link href="/contact"><a>Contact</a></Link>
            <Link href="/jobs"><a>Jobs</a></Link>
            <Link href="">Sign in</Link>
            <Link href="">Sign out</Link>
        </nav>
    );
}
 
export default Navbar;