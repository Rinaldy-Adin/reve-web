import Testimony1 from '../assets/images/home/Testimony-1.jpg';
import Testimony2 from '../assets/images/home/Testimony-2.jpg';
import Testimony3 from '../assets/images/home/Testimony-3.jpg';
import placeholder from '../assets/placeholder.jpg';
import { getStorage, getDownloadURL, ref } from 'firebase/storage';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const testi = [
    'In the last 10 months I’ve rented over 20 million worth office attire. This risk-free choices have boost my confidence at work.',
];

const Home = () => {
    const collUrl = [
        'https://firebasestorage.googleapis.com/v0/b/tggr-photo-tagger.appspot.com/o/assets%2Fhome%2FItems-1.jpg?alt=media&token=bf22df34-1d18-475d-9ae0-11404ff4a3e9',
        'https://firebasestorage.googleapis.com/v0/b/tggr-photo-tagger.appspot.com/o/assets%2Fhome%2FItems-2.jpg?alt=media&token=4d4ba21e-fb2f-44f3-9087-fca126efc20d',
        'https://firebasestorage.googleapis.com/v0/b/tggr-photo-tagger.appspot.com/o/assets%2Fhome%2FItems-3.jpg?alt=media&token=4df80f98-159f-49a0-9959-160cd252d93b',
        'https://firebasestorage.googleapis.com/v0/b/tggr-photo-tagger.appspot.com/o/assets%2Fhome%2FItems-4.jpg?alt=media&token=447627ef-fb86-45dc-8341-fe864183eaa1',
        'https://firebasestorage.googleapis.com/v0/b/tggr-photo-tagger.appspot.com/o/assets%2Fhome%2FItems-5.jpg?alt=media&token=b41c8890-1ed4-44ff-a46f-701c26651b7b',
        'https://firebasestorage.googleapis.com/v0/b/tggr-photo-tagger.appspot.com/o/assets%2Fhome%2FItems-6.jpg?alt=media&token=c1d42984-ff45-4422-8d6e-234871a8840f',
    ];

    const testiUrl = [
        'https://firebasestorage.googleapis.com/v0/b/tggr-photo-tagger.appspot.com/o/assets%2Fhome%2FTestimony-1.jpg?alt=media&token=d8f07309-ddc1-489d-8a94-3898c4dcf366',
        'https://firebasestorage.googleapis.com/v0/b/tggr-photo-tagger.appspot.com/o/assets%2Fhome%2FTestimony-2.jpg?alt=media&token=00a1bfd1-c9c6-44ee-af5d-e55996831457',
        'https://firebasestorage.googleapis.com/v0/b/tggr-photo-tagger.appspot.com/o/assets%2Fhome%2FTestimony-3.jpg?alt=media&token=46f8a7b5-c111-4533-bd36-44951193e6e3',
    ];

    return (
        <div className='mt-[100px] flex-1'>
            <Jumbotron />
            <div className='my-20 w-full'></div>
            <div className='w-full flex flex-col gap-6 my-20 items-center'>
                <div className='flex flex-row px-13 gap-14 items-center justify-center'>
                    <Collection src={collUrl[0]}>Girls Night Out</Collection>
                    <Collection src={collUrl[1]}>Boss Lady</Collection>
                    <Collection src={collUrl[2]}>Men's Office</Collection>
                    <Collection src={collUrl[3]}>Baby Essentials</Collection>
                    <Collection src={collUrl[4]}>Kids Play!</Collection>
                    <Collection src={collUrl[5]}>Official Brand</Collection>
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
                        src={testiUrl[0]}
                        testimony={testi[0]}
                        handle={'kevinpangestu'}
                    />
                    <Testimony
                        src={testiUrl[1]}
                        testimony={testi[0]}
                        handle={'kevinpangestu'}
                    />
                    <Testimony
                        src={testiUrl[2]}
                        testimony={testi[0]}
                        handle={'kevinpangestu'}
                    />
                </div>
            </div>
        </div>
    );
};

const Jumbotron = (src) => {
    return (
        <div
            style={{
                backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/tggr-photo-tagger.appspot.com/o/assets%2Fhome%2FJumbotron.jpg?alt=media&token=bec4f34c-8ddd-4e65-b677-4c4d713657e2)`,
            }}
            className='w-full h-[600px] bg-cover'
        ></div>
    );
};

const Collection = ({ src, children }) => {
    return (
        <Link to='/catalogue' className='w-[140px]'>
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
