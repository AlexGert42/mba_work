import stls from '@/styles/components/general/Filters.module.sass'
import classNames from 'classnames'
import Link from 'next/link'
import useAt from '@/components/hooks/useAt'
import Discount from '@/components/costs/Discount'

const Filters = ({
  mbaTypeOfProgram,
  mbaFormat,
  fields,
  currentField,
  updateCurrentField
}) => {
  const at = useAt()

  const handleLinkClick = e => {
    if (fields) e.preventDefault()
  }

  return (
    <ul className={stls.filters}>
      <li>
        <h4 className={stls.title}>Тип программы</h4>
        <div className={stls.content}>
          <Link href={`/programs/mini/${mbaFormat}`}>
            <a>
              <span
                className={classNames({
                  [stls.circle]: true,
                  [stls.active]: at.mini
                })}></span>{' '}
              Mini MBA
            </a>
          </Link>

          <Link href={`/programs/professional/${mbaFormat}`}>
            <a>
              <span
                className={classNames({
                  [stls.circle]: true,
                  [stls.active]: at.professional
                })}></span>{' '}
              Professional MBA
            </a>
          </Link>

          <Link href={`/programs/industry/${mbaFormat}`}>
            <a>
              <span
                className={classNames({
                  [stls.circle]: true,
                  [stls.active]: at.industry
                })}></span>{' '}
              Industry MBA
            </a>
          </Link>

          <Link href={`/programs/profession/online`}>
            <a>
              <span
                className={classNames({
                  [stls.circle]: true,
                  [stls.active]: at.profession
                })}></span>{' '}
              Профессии
            </a>
          </Link>

          <Link href='/programs/international-business-law' locale='ru'>
            <a
              className={classNames({
                [stls.highlight]: true,
                [stls.mbl]: true
              })}>
              MBL
            </a>
          </Link>
          <Link href='/programs/executive' locale='ru'>
            <a className={stls.highlight}>
              Executive MBA <span className={stls.premium}>Premium</span>
            </a>
          </Link>
        </div>
      </li>
      <li>
        <h4 className={stls.title}>Формат обучения</h4>
        <div className={stls.content}>
          <Link href={`/programs/${mbaTypeOfProgram}/blended`}>
            <a
              className={classNames({ [stls.inactiveLink]: fields })}
              onClick={e => handleLinkClick(e)}>
              <span
                className={classNames({
                  [stls.circle]: true,
                  [stls.active]: at.blended
                })}></span>{' '}
              BLENDED (с очными модулями)
            </a>
          </Link>

          <Link href={`/programs/${mbaTypeOfProgram}/online`}>
            <a>
              <span
                className={classNames({
                  [stls.circle]: true,
                  [stls.active]: at.online
                })}></span>{' '}
              ONLINE (дистанционно){' '}
              <span className={stls.discount50}>
                <Discount />
              </span>
            </a>
          </Link>
        </div>
      </li>
      {fields && (
        <li>
          <h4 className={stls.title}>Направление</h4>
          <div className={stls.content}>
            {fields.map((field, idx) => (
              <button
                key={`field-btn-${idx}`}
                className={stls.fieldButton}
                onClick={() => updateCurrentField(field)}>
                <span
                  className={classNames({
                    [stls.circle]: true,
                    [stls.active]: field === currentField
                  })}></span>
                {field}
              </button>
            ))}
          </div>
        </li>
      )}
    </ul>
  )
}

export default Filters
