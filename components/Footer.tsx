import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='footer-top'>
          <div className='footer-top-left'>
            <div className='footer-tel'>
              <a href='tel:8-495-648-62-26'>+7 (495) 648 62 26</a>
            </div>
            <div className='footer-mail'>
              <a href='mailto:info@moscow.mba'>info@moscow.mba</a>
            </div>
          </div>
          <div className='footer-top-right'>
            <ul className='footer-menu'>
              <li>
                <Link href='/programs/mini/online'>
                  <a>MBA Mini</a>
                </Link>
              </li>
              <li>
                <Link href='/programs/mini/blended'>
                  <a>MBA Mini Blended</a>
                </Link>
              </li>
              <li>
                <Link href='/programs/professional/online'>
                  <a>MBA Professional</a>
                </Link>
              </li>
              <li>
                <Link href='/programs/professional/blended'>
                  <a>MBA Professional Blended</a>
                </Link>
              </li>
              <li>
                <Link href='/programs/industry/online'>
                  <a>MBA Industry</a>
                </Link>
              </li>
              <li>
                <Link href='/programs/industry/blended'>
                  <a>MBA Industry Blended</a>
                </Link>
              </li>
              <li>
                <Link href='/programs/executive'>
                  <a>Executive MBA</a>
                </Link>
              </li>
              <li className='empty'></li>
              <li>
                <Link href='/webinars'>
                  <a>Вебинары</a>
                </Link>
              </li>
              {/* <li>
                <a>Оплата обучения</a>
              </li> */}
              <li>
                <Link href='/about'>
                  <a>О школе</a>
                </Link>
              </li>
            </ul>
            <div className='footer-contacts'>
              <div className='footer-place'>
                <img src='/assets/images/marker_black.svg' alt='' />
                <span>Москва, Дербеневская набережная 11</span>
              </div>
              <ul className='footer-socials'>
                <li>
                  <a href='#!'>
                    <img src='/assets/images/vk.svg' alt='' />
                  </a>
                </li>
                <li>
                  <a href='#!'>
                    <img src='/assets/images/telegram.svg' alt='' />
                  </a>
                </li>
                <li>
                  <a href='#!'>
                    <img src='/assets/images/whatsapp.svg' alt='' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='footer-copyright'>&copy; МБА, 2021</div>
          <a href='#!' className='footer-links'>
            Договор оферты
          </a>
          <a href='#!' className='footer-links'>
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
