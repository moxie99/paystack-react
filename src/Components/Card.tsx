interface Item {
  name: string;
  price: number;
  img: string;
}

const Cards = ({
  item,
  handleClick,
}: {
  item: Item;
  handleClick: (item: Item) => void;
}) => {
  const { name, price, img } = item;

  return (
    <>
      <section className='flex flex-row w-full px-6 py-4 lg:w-1/4'>
        <div className='w-1/2 p-1 mb-4 md:w-1/3 lg:w-full'>
          <div className='h-full overflow-auto border-2 border-gray-200 rounded-lg border-opacity-60'>
            <img
              className='object-cover object-center w-full h-48 lg:h-72 md:h-36'
              src={img}
              alt='item'
            />
            <div className='px-3 py-2'>
              <h1 className='mb-3 text-xl font-bold'>{name}</h1>
              <div className='flex flex-wrap justify-between mt-4 mb-2'>
                <p className='mt-4 text-lg leading-relaxed'>Price: ${price}</p>
                <button
                  onClick={() => handleClick(item)}
                  className='px-3 py-2 text-lg text-white bg-brandColor rounded-xl hover:border-2 hover:bg-white hover:text-brandColor hover:border-brandColor'
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
