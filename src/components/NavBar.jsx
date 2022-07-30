import { ReactComponent as Logo } from '../assets/Logo/lg.svg';
import { ReactComponent as Wishlist } from '../assets/vectors/wishlist.svg';
import { ReactComponent as ShoppingBag } from '../assets/vectors/shoppingbag.svg';
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='fixed top-0 left-0 bg-white flex justify-between w-full px-16 py-6 items-center border-RVGray-2 border-b-[0.5px]'>
            <Logo />
            <div className='flex flex-row gap-12'>
                <Link to=''>
                    <h3 className='font-bold'>GET STARTED</h3>
                </Link>
                <Link to=''>
                    <h3 className='font-bold'>CLOTHING</h3>
                </Link>
                <Link to=''>
                    <h3 className='font-bold text-red-600'>SALE</h3>
                </Link>
            </div>
            <div className='flex flex-row gap-x-6 items-center'>
                <Link to=''>
                    <h3 className='font-bold'>Sign In</h3>
                </Link>
                <Link to=''>
                    <Wishlist />
                </Link>
                <Link to=''>
                    <ShoppingBag />
                </Link>
                <SearchBar />
            </div>
        </div>
    );
};

export default NavBar;
