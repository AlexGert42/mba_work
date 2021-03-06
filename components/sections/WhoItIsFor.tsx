import stls from '@/styles/components/sections/WhoItIsFor.module.sass'
import classNames from 'classnames'
import useAt from '@/components/hooks/useAt'
import WhoItIsForItem from '@/components/general/WhoItIsForItem'

const WhoItIsFor = ({ data: { suitsForTitle, suitsForDesc, title } }) => {
  const at = useAt()
  const columnsContent = []

  suitsForTitle.forEach((title, idx) => {
    columnsContent.push({ title, description: suitsForDesc[idx] })
  })

  return (
    <section className={stls.container}>
      <h2 className={stls.title}>
        {at.promo ? 'Форматы обучения' : 'Кому подойдет программа?'}
      </h2>
      <div
        className={classNames(stls.itemsContainer, {
          [stls.noBottomLine]: at.promo
        })}>
        {columnsContent.map(({ title, description }, idx) => (
          <WhoItIsForItem
            key={title + idx}
            title={title}
            description={description}
            moduleIndex={idx}
          />
        ))}
      </div>
    </section>
  )
}

export default WhoItIsFor
