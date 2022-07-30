import jumbotron from '../assets/images/home/Jumbotron.jpg';
import Collection1 from '../assets/images/home/Items-1.jpg';
import Collection2 from '../assets/images/home/Items-2.jpg';
import Collection3 from '../assets/images/home/Items-3.jpg';
import Collection4 from '../assets/images/home/Items-4.jpg';
import Collection5 from '../assets/images/home/Items-5.jpg';
import Collection6 from '../assets/images/home/Items-6.jpg';
import Testimony1 from '../assets/images/home/Testimony-1.jpg';
import Testimony2 from '../assets/images/home/Testimony-2.jpg';
import Testimony3 from '../assets/images/home/Testimony-3.jpg';
import { Link } from 'react-router-dom';

const testi = [
    'In the last 10 months I’ve rented over 20 million worth office attire. This risk-free choices have boost my confidence at work.',
];

const Home = () => {
    return (
        <div className='mt-[100px] flex-1'>
            <Jumbotron />
            <div className='my-20 w-full'></div>
            <div className='w-full flex flex-col gap-6 my-20 items-center'>
                <div className='flex flex-row px-13 gap-14 items-center justify-center'>
                    <Collection src={Collection1}>Girls Night Out</Collection>
                    <Collection src={Collection2}>Boss Lady</Collection>
                    <Collection src={Collection3}>Men's Office</Collection>
                    <Collection src={Collection4}>Baby Essentials</Collection>
                    <Collection src={Collection5}>Kids Play!</Collection>
                    <Collection src={Collection6}>Official Brand</Collection>
                </div>
                <button className='rounded-full px-7 py-3 bg-black shadow-md'>
                    <h2 className='text-white'>VIEW ALL COLECTIONS</h2>
                </button>
            </div>
            <div className='flex flex-row gap-16 my-20 justify-center'>
                <Link
                    to=''
                    className='w-[330px] h-[190px] flex items-center justify-center bg-RVRed-1'
                >
                    <h1 className='text-[32px] text-white'>HOW IT WORKS</h1>
                </Link>
                <Link
                    to=''
                    className='w-[330px] h-[190px] flex items-center justify-center bg-RVRed-2'
                >
                    <h1 className='text-[32px] text-white'>OUR STORY</h1>
                </Link>
                <Link
                    to=''
                    className='w-[330px] h-[190px] flex items-center justify-center bg-RVRed-3'
                >
                    <h1 className='text-[32px] text-white'>REVE COMMUNITY</h1>
                </Link>
            </div>
            <div className='mt-20 bg-RVGray-2 w-full flex flex-col items-center pt-8 pb-12'>
                <h1 className='text-4xl mb-4'>FROM OUR COMMUNITY</h1>
                <p className='w-[800px] text-center'>
                    Thousands of men, women, and kids have joined the movement
                    to get dressed in a way more circular and sustainable.
                    Here’s what a few of them have to say :{' '}
                </p>
                <div className='mt-7 flex flex-row w-full justify-center gap-20'>
                    <Testimony
                        src={Testimony1}
                        testimony={testi[0]}
                        handle={'kevinpangestu'}
                    />
                    <Testimony
                        src={Testimony2}
                        testimony={testi[0]}
                        handle={'kevinpangestu'}
                    />
                    <Testimony
                        src={Testimony3}
                        testimony={testi[0]}
                        handle={'kevinpangestu'}
                    />
                </div>
            </div>
        </div>
    );
};

const Jumbotron = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${jumbotron})`,
            }}
            className='w-full h-[600px] bg-cover'
        ></div>
    );
};

const Collection = ({ src, children }) => {
    return (
        <Link to='' className='w-[140px]'>
            <img
                src={src}
                alt='collection'
                className='w-full rounded-full mb-1'
            />
            <p className='font-semibold text-center'>{children}</p>
        </Link>
    );
};

const Testimony = ({ src, testimony, handle }) => {
    return (
        <div className='w-[300px]'>
            <img src={src} alt='testimony' />
            <p className='mt-3'>
                <span className='font-bold'>“</span>
                {testimony}
                <span className='font-bold'>”</span> <br />
                <span className='font-bold'>@{handle}</span>
            </p>
        </div>
    );
};

export default Home;
