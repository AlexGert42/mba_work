import stls from '@/styles/components/icons/IconArrowTopRight.module.sass'

const IconArrowTopRight = ({ width = '36', height = '36' }) => {
  return (
    // <div className={stls.container}>
    <svg
      width={width}
      height={height}
      viewBox='0 0 36 36'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <title>Стрелка вверх-вправо</title>
      <line x1='1' y1='1' x2='36' y2='1' stroke='white' strokeWidth='2' />
      <line x1='35' y1='35' x2='35' y2='1' stroke='white' strokeWidth='2' />
      <path d='M35 1L1 35' stroke='white' strokeWidth='2' />
    </svg>
    // </div>
  )
}

export default IconArrowTopRight
