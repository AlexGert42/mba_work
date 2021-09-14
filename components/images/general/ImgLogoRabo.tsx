import stls from '@/styles/components/images/general/ImgLogoRabo.module.sass'
import Image from 'next/image'
import classnames from 'classnames'
import { getClassNames } from '@/helpers/index'
import companyName from '@/data/general/companyName'
import pic from '@/public/assets/images/general/logo-rabo.png'

type ImgLogoRaboType = {
  classNames?: string[]
  width?: number
  height?: number
}

const ImgLogoRabo = ({ classNames = [], width, height }: ImgLogoRaboType) => {
  const container = getClassNames({ classNames })

  // const pic =
  //   'https://res.cloudinary.com/npomba/image/upload/v1631616737/static/logo-rabo_yh7qz7.png'

  return (
    <div className={classnames([stls.container], container)}>
      <Image
        src={pic}
        alt={companyName}
        className={stls.img}
        width={width}
        height={height}
        placeholder='blur'
      />
    </div>
  )
}

export default ImgLogoRabo
