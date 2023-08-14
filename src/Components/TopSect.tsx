import { FaShoppingCart } from 'react-icons/fa';

function TopSect({
  setShow,
  size,
}: {
  setShow: (value: boolean) => void;
  size: number;
}) {
  return (
    <>
      <div className='flex justify-between items-center px-8 pt-2 pb-4 sticky w-full top-0 z-50 bg-white shadow-lg border-b-[2px]'>
        <div className='relative flex items-center justify-center'>
          <p className='text-base font-semibold text-black'>Hello User👋</p>
        </div>

        <div className='flex flex-row flex-wrap text-black'>
          <p
            onClick={() => setShow(true)}
            className='mt-5 mr-4 text-xl cursor-pointer hover:text-brandColor hover:underline'
          >
            Store
          </p>
          <span
            className='text-xl cursor-pointer text-brandColor'
            onClick={() => setShow(false)}
          >
            <FaShoppingCart className='mt-6 text-2xl' />
          </span>
          <p className='mt-4 ml-1 text-sm'>{size}</p>
        </div>
      </div>
    </>
  );
}

export default TopSect;
