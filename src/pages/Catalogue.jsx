import { Link } from 'react-router-dom';
import CatalogueSidebar from '../components/CatalogueSidebar';

const Catalogue = () => {
    return (
        <div className='w-full mt-[100px] px-[100px] flex flex-row justify-center gap-5 flex-1'>
            <CatalogueSidebar />
            <div className='grid grid-cols-4 gap-x-5 gap-y-7 mt-4 mb-12'>
                <CatalogueItem
                    name={'KOREAN SHIRT - WHITE DOTS'}
                    price={40000}
                />
                <CatalogueItem
                    name={'KOREAN SHIRT - WHITE DOTS'}
                    price={40000}
                />
                <CatalogueItem
                    name={'KOREAN SHIRT - WHITE DOTS'}
                    price={40000}
                />
                <CatalogueItem
                    name={'KOREAN SHIRT - WHITE DOTS'}
                    price={40000}
                />
                <CatalogueItem
                    name={'KOREAN SHIRT - WHITE DOTS'}
                    price={40000}
                />
                <CatalogueItem
                    name={'KOREAN SHIRT - WHITE DOTS'}
                    price={40000}
                />
                <CatalogueItem
                    name={'KOREAN SHIRT - WHITE DOTS'}
                    price={40000}
                />
            </div>
        </div>
    );
};

const CatalogueItem = ({ name, price }) => {
    const formatRupiah = (money) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        }).format(money);
    };

    return (
        <Link to='' className='text-center'>
            <div className='w-full h-[340px] bg-RVGray-2 mb-1'></div>
            <h4 className='text-center w-4/5 mx-auto mb-1'>{name}</h4>
            <p className='font-alt'>{formatRupiah(price)} /day</p>
        </Link>
    );
};

export default Catalogue;
