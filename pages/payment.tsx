import Head from 'next/head'
import Image from 'next/image'
import stls from '@/styles/modules/PaymentPage.module.sass'
import { server, apiProgramsReqUrl } from '@/config/index'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import PopUpForm from '@/components/popups/Form'

const payment = ({ programs }) => {
  return (
    <>
      <Head>
        <title>MBA | Оплата</title>
      </Head>
      <div className='container'>
        <div className={stls.content}>
          <h1 className={stls.h1}>Оплата</h1>
          <h2 className={stls.h2}>Банковской картой</h2>

          <p className={stls.p}>
            Для проведения оплаты обучения, с помощью банковской карты, ниже на
            этой странице необходимо нажать кнопку{' '}
            <strong>Оплата банковской картой</strong>. Оплата происходит через
            ПАО СБЕРБАНК с использованием банковских карт следующих платёжных
            систем:
          </p>

          <ul className={stls.list}>
            <li>
              <p className={stls.p}>VISA International</p>
            </li>
            <li>
              <p className={stls.p}>Mastercard Worldwide</p>
            </li>
            <li>
              <p className={stls.p}>JCB</p>
            </li>
            <li>
              <p className={stls.p}>МИР</p>
            </li>
          </ul>

          <Image
            src='/assets/images/payment/payment-methods.png'
            alt='Способы оплаты: VISA International, Mastercard Worldwide, JCB, МИР'
            width={200}
            height={34}
          />

          <p className={`${stls.p} ${stls.mt}`}>
            Для оплаты (ввода реквизитов Вашей карты) Вы будете перенаправлены
            на платёжный шлюз ПАО СБЕРБАНК. Соединение с платёжным шлюзом и
            передача информации осуществляется в защищённом режиме с
            использованием протокола шифрования SSL. В случае если Ваш банк
            поддерживает технологию безопасного проведения интернет-платежей
            Verified By Visa, MasterCard SecureCode, MIR Accept, J-Secure, для
            проведения платежа также может потребоваться ввод специального
            пароля
          </p>

          <p className={stls.p}>
            Настоящий сайт поддерживает 256-битное шифрование.
            Конфиденциальность сообщаемой персональной информации обеспечивается
            ПАО СБЕРБАНК. Введённая информация не будет предоставлена третьим
            лицам за исключением случаев, предусмотренных законодательством РФ.
            Проведение платежей по банковским картам осуществляется в строгом
            соответствии с требованиями платёжных систем МИР, Visa Int.,
            MasterCard Europe Sprl, JCB
          </p>

          <p className={stls.p}>
            Пожалуйста, не забудьте указать ФИО и номер договора на странице с
            оплатой
          </p>

          <div className={stls.btns}>
            <a
              className={stls.btn}
              href='#'
              target='_blank'
              rel='noopener noreferrer'>
              Оплата банковской картой
            </a>

            <Popup trigger={<a className={stls.btnAlt}>Помощь</a>} modal nested>
              {close => (
                <PopUpForm
                  title={'Помощь с оплатой'}
                  disc={
                    'Оставьте заявку, наш менеджер свяжется с Вами и поможет по вопросам оплаты'
                  }
                  closePopUpForm={close}
                />
              )}
            </Popup>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${server}${apiProgramsReqUrl}`)
  const { data } = await res.json()

  return {
    props: {
      programs: data
    }
  }
}

export default payment
