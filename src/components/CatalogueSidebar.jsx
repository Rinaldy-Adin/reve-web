import { useState } from 'react';
import { ReactComponent as Chevron } from '../assets/vectors/chevron-down.svg';

const CatalogueSidebar = () => {
    const [openItem, setOpenItem] = useState(-1);

    const categories = ['WOMEN', 'MEN', 'KIDS'];

    return (
        <div className='w-[180px] flex flex-col gap-y-5 py-8'>
            {categories.map((cat, idx) => (
                <SidebarItem
                    name={cat}
                    key={idx}
                    idx={idx}
                    setOpenItem={(idx) => {
                        setOpenItem(idx);
                    }}
                    open={idx === openItem}
                />
            ))}
        </div>
    );
};

const SidebarItem = ({ name, idx, open, setOpenItem }) => {
    return (
        <div
            onClick={() => {
                setOpenItem(idx);
            }}
            className='flex justify-between hover:cursor-pointer'
        >
            <h2 className=''>{name}</h2>
            <Chevron
                className='transition-transform duration-500'
                style={{ transform: open ? 'rotate(180deg)' : '' }}
            />
        </div>
    );
};

export default CatalogueSidebar;
