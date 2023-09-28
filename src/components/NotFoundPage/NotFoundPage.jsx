import React from 'react';
import  './NotFoundPage.css'
import { Link } from 'react-router-dom';

function NotFoundPage({setHeaderHidden, setFooterHidden}) {

  React.useEffect(() => {
    setHeaderHidden(true)
    setFooterHidden(true)
    // setIsActive(false)
    // handleMainLink()
  })

  return (
    <section className='not-found'>
      <h1 className='not-found__title'>404</h1>
      <p className='not-found__text'>Страница не найдена</p>
      <Link className='not-found__link' to="/">Назад</Link>
    </section>
  )
}

export default NotFoundPage;
