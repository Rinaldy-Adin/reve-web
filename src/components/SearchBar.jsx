import { ReactComponent as SearchIcon } from '../assets/vectors/search.svg';

const SearchBar = () => {
    return (
        <div className='flex flex-row gap-[10px] px-3 py-2 rounded bg-RVGray-0 '>
            <SearchIcon />
            <input
                type='text'
                className='bg-inherit outline-none text-RVGray-4 text-[20px]'
            />
        </div>
    );
};

export default SearchBar;
