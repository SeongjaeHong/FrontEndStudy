import { useEffect, useState } from 'react';
import '../css/header.css';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import { Form, Link, useSearchParams } from 'react-router';

export default function SearchHeader() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('search_keyword');
  const [text, setText] = useState('');
  useEffect(() => setText(keyword || ''), [keyword]);

  return (
    <section className='main-root'>
      <section className='main-frame'>
        <header>
          <Link className='logo' to={'/'}>
            <span id='icon' className='text-red-600'>
              <BsYoutube />
            </span>
            <span id='letter'>Youtube</span>
          </Link>
          <Form className='search' method='get' action={'/results/'}>
            <input
              type='text'
              name='search_keyword'
              className='search-tab'
              id='search-tab'
              placeholder='검색'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button id='search-button'>
              <BsSearch />
            </button>
          </Form>
        </header>
      </section>
    </section>
  );
}
