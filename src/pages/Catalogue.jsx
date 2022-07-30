import { Link } from 'react-router-dom';
import CatalogueSidebar from '../components/CatalogueSidebar';

const Catalogue = () => {
    const catUrl = [
        'https://firebasestorage.googleapis.com/v0/b/tggr-photo-tagger.appspot.com/o/assets%2Fcatalogue%2Fitem1.jpg?alt=media&token=d04bf1c2-0f03-4237-b77f-79afd36e76af',
        'https://firebasestorage.googleapis.com/v0/b/tggr-photo-tagger.appspot.com/o/assets%2Fcatalogue%2Fitem2.jpg?alt=media&token=ef525d70-f66a-4dbc-ac62-16ed95686b2a',
        'https://firebasestorage.googleapis.com/v0/b/tggr-photo-tagger.appspot.com/o/assets%2Fcatalogue%2Fitem3.jpg?alt=media&token=61f13c32-3a40-45e5-825d-31713a9f5aa3',
        'https://firebasestorage.googleapis.com/v0/b/tggr-photo-tagger.appspot.com/o/assets%2Fcatalogue%2Fitem4.jpg?alt=media&token=ce5d1ac7-61fa-45d5-a252-ecf82ac492c1',
        'https://firebasestorage.googleapis.com/v0/b/tggr-photo-tagger.appspot.com/o/assets%2Fcatalogue%2Fitem5.jpg?alt=media&token=f771bba4-72d2-4d44-a84d-d94fd162a4b7',
        'https://firebasestorage.googleapis.com/v0/b/tggr-photo-tagger.appspot.com/o/assets%2Fcatalogue%2Fitem6.jpg?alt=media&token=4cd3a9f4-dafc-4bfa-90e4-2902ce792ef5',
        'https://firebasestorage.googleapis.com/v0/b/tggr-photo-tagger.appspot.com/o/assets%2Fcatalogue%2Fitem7.jpg?alt=media&token=fa4d598e-c9d4-410b-9341-c1b0bc7d7f76',
        'https://firebasestorage.googleapis.com/v0/b/tggr-photo-tagger.appspot.com/o/assets%2Fcatalogue%2Fitem8.jpg?alt=media&token=ac73456d-9b89-4ace-a09a-57e2c8ae3ef1',
    ];

    const catCW = [
        'RED CHECKERED SHIRT',
        '4 BLOCK SHIRT',
        'KOREAN SHIRT - WHITE DOTS',
        'ZARA PLAIN PINK SHIRT',
        'UNIQLO BLEND LINEN',
        'TOMMY HILLFINGER PINK DOTS SHIRT',
        'POLO OVERSIZED WHITE SHIRT',
        'COMMES DES GARCONS PLAIN WHITE SHIRT',
    ];

    return (
        <div className='w-full mt-[100px] px-[100px] flex flex-row justify-center gap-5 flex-1'>
            <CatalogueSidebar />
            <div className='grid grid-cols-4 gap-x-5 gap-y-7 mt-4 mb-12'>
                <CatalogueItem src={catUrl[0]} name={catCW[0]} price={4000} />
                <CatalogueItem src={catUrl[1]} name={catCW[1]} price={5000} />
                <CatalogueItem src={catUrl[2]} name={catCW[2]} price={4000} />
                <CatalogueItem src={catUrl[3]} name={catCW[3]} price={9000} />
                <CatalogueItem src={catUrl[4]} name={catCW[4]} price={9000} />
                <CatalogueItem src={catUrl[5]} name={catCW[5]} price={12000} />
                <CatalogueItem src={catUrl[6]} name={catCW[6]} price={13000} />
                <CatalogueItem src={catUrl[7]} name={catCW[7]} price={11000} />
            </div>
        </div>
    );
};

const CatalogueItem = ({ name, price, src }) => {
    const formatRupiah = (money) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        }).format(money);
    };

    return (
        <Link to='' className='text-center'>
            <div
                className='w-full h-[540px] bg-RVGray-2 mb-1 bg-cover bg-center'
                style={{ backgroundImage: `url(${src})` }}
            ></div>
            <h4 className='text-center w-4/5 mx-auto mb-1'>{name}</h4>
            <p className='font-alt'>{formatRupiah(price)} /day</p>
        </Link>
    );
};

export default Catalogue;
