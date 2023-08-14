import React, { useState, useEffect } from 'react';
import Cards from './Card';
import { list } from '../data';
import { FaSearch } from 'react-icons/fa';

interface CartItem {
  id: string;
  img: string;
  name: string;
  amount: number;
  price: number;
}

interface DetailsProps {
  handleClick: (item: any) => void;
}

function Details({ handleClick }: DetailsProps) {
  const [category, setCategory] = useState(list);
  const [activeTab, setActiveTab] = useState('All');

  //search functionality
  const [query, setQuery] = useState('');

  //filtering functionality
  const handleBtns = (word: string) => {
    if (word === 'All') {
      setCategory(list);
    } else {
      const filtered = list.filter((item) => item.kind === word);
      setCategory(filtered);
    }

    setActiveTab(word);
  };

  return (
    <>
      <section className='container w-full pt-4 mx-auto bg-bgColor'>
        <section className='flex flex-row justify-between px-6'>
          <div className='relative mt-4 w-80 h-11'>
            <input
              type='text'
              onChange={(event) => setQuery(event.target.value)}
              className='w-full h-full px-10 py-4 text-base text-black border-2 border-black rounded-lg'
              placeholder='Search food...'
            />
            <i>
              <FaSearch className='absolute w-4 h-4 text-lg text-center text-black left-4 top-4 focus:outline-none' />
            </i>
          </div>

          <div className='flex flex-wrap mt-4 mb-8 lg:mb-4'>
            <button
              value='All'
              onClick={() => handleBtns('All')}
              className={`mr-2 text-brandColor border-brandColor border-2 py-1 px-6 md:w-24 h-10 rounded-lg text-lg ${
                activeTab === 'All'
                  ? 'bg-brandColor outline-none text-white'
                  : ''
              }`}
            >
              All
            </button>
            <button
              value='African'
              onClick={() => handleBtns('African')}
              className={`mr-2 text-brandColor border-brandColor border-2 py-1 px-6 md:w-24 h-10 rounded-lg text-lg ${
                activeTab === 'African'
                  ? 'bg-brandColor outline-none text-white'
                  : ''
              }`}
            >
              African
            </button>
            <button
              value='American'
              onClick={() => handleBtns('American')}
              className={`mr-2 text-brandColor border-brandColor border-2 py-1 md:w-24 h-10 rounded-lg text-lg ${
                activeTab === 'American'
                  ? 'bg-brandColor outline-none text-white'
                  : ''
              }`}
            >
              American
            </button>
            <button
              value='Chinese'
              onClick={() => handleBtns('Chinese')}
              className={`mr-2 text-brandColor border-brandColor border-2 py-1 md:w-24 h-10 rounded-lg text-lg ${
                activeTab === 'Chinese'
                  ? 'bg-brandColor outline-none text-white'
                  : ''
              }`}
            >
              Chinese
            </button>
          </div>
        </section>

        <section className='flex flex-row flex-wrap'>
          {category
            .filter((name) => {
              if (query === '') {
                return name;
              } else if (
                name.name.toLowerCase().includes(query.toLowerCase())
              ) {
                return name;
              }
            })
            .map((item) => (
              <Cards key={item.id} item={item} handleClick={handleClick} />
            ))}
        </section>
      </section>
    </>
  );
}

export default Details;
