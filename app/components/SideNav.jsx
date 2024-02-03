import Image from 'next/image';
import logo from '../../public/logo.png'
import home from '../../public/home 1.png'
import menu from '../../public/54-menu-2.png'
import memorize from '../../public/memorize 1.png'
import minus from '../../public/3-keep-minus.png'
import ruqya from '../../public/ruqyah 1.png'
import book from '../../public/books 1.png'
import dua from '../../public/dua-info 1.png'
import support from '../../public/I want to support.png'

const SideNav = () => {
    return (
        <div className="bg-white px-2 lg:px-4 py-2 lg:py-10  flex lg:flex-col justify-between rounded-t-[60px] lg:rounded-xl z-10">
            <nav className="flex items-center flex-row lg:flex-col lg:space-y-2 gap-2 lg:gap-4">
                <Image src={logo} width={80} />
                {/* <!-- Active: bg-gray-800 text-white, Not active: text-white/50 --> */}
                <div className='bg-gray-200 p-2 rounded-full'>
                    <Image src={home} width={15} />
                </div>
                <div className='bg-gray-200 p-2 rounded-full'>
                    <Image src={menu} width={15} />
                </div>
                <div className='bg-gray-200 p-2 rounded-full'>
                    <Image src={memorize} width={15} />
                </div>
                <div className='bg-gray-200 p-2 rounded-full'>
                    <Image src={minus} width={15} />
                </div>
                <div className='bg-gray-200 p-2 rounded-full'>
                    <Image src={ruqya} width={15} />
                </div>
                <div className='bg-gray-200 p-2 rounded-full'>
                    <Image src={book} width={15} />
                </div>
                <div className='bg-gray-200 p-2 rounded-full'>
                    <Image src={dua} width={15} />
                </div>

            </nav>
            <div className="flex items-center flex-row space-x-2 lg:space-x-0 lg:flex-col lg:space-y-2">
                <Image src={support} width={80} />
            </div>
        </div>
    );
};

export default SideNav;