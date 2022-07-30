import { ReactComponent as Logo } from '../assets/Logo/xl.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='px-32 pt-11 pb-3 bg-black text-white'>
            <div className='flex flex-row'>
                <div className='w-[200px] mr-20'>
                    <Logo />
                    <p className='font-volkhov tracking-wide'>
                        Indonesia’s first diverse fashion rental app.
                    </p>
                </div>
                <div className='mx-11'>
                    <h2 className='font-bold'>THE BASIC</h2>
                    <div className='flex flex-col gap-[2px] text-[#C2BEBE]'>
                        <Link to=''>
                            <p>How It Works</p>
                        </Link>
                        <Link to=''>
                            <p>Finding Your Fit</p>
                        </Link>
                        <Link to=''>
                            <p>Returning Your Rentals</p>
                        </Link>
                        <Link to=''>
                            <p>Rental Request</p>
                        </Link>
                        <Link to=''>
                            <p>Our Cleaning Process</p>
                        </Link>
                        <Link to=''>
                            <p>Testimonials</p>
                        </Link>
                    </div>
                </div>
                <div className='mx-11'>
                    <h2 className='font-bold'>THE COMPANY</h2>
                    <div className='flex flex-col gap-[2px] text-[#C2BEBE]'>
                        <Link to=''>
                            <p>Vision</p>
                        </Link>
                        <Link to=''>
                            <p>Story</p>
                        </Link>
                        <Link to=''>
                            <p>Community</p>
                        </Link>
                        <Link to=''>
                            <p>Impact</p>
                        </Link>
                        <Link to=''>
                            <p>Investor Relations</p>
                        </Link>
                        <Link to=''>
                            <p>Press</p>
                        </Link>
                        <Link to=''>
                            <p>Careers</p>
                        </Link>
                    </div>
                </div>
                <div className='mx-11'>
                    <h2 className='font-bold'>GET HELP</h2>
                    <div className='flex flex-col gap-[2px] text-[#C2BEBE]'>
                        <Link to=''>
                            <p>FAQs</p>
                        </Link>
                        <Link to=''>
                            <p>Contact Us</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='mt-12 mb-4 mx-auto text-center text-[#C2BEBE]'>
                © 2022 ReVe. All Rights Reserved.
            </div>
        </div>
    );
};

export default Footer;
