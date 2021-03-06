import stls from '@/styles/components/general/ProgramsQty.module.sass'
import classNames from 'classnames'
import setString from '@/components/hooks/SetString'
import langMenu from '@/data/translation/menu'
import { getStringDeclensionNumber } from '@/components/utils/'

const ProgramsQty = ({
  programs,
  type = '',
  format = '',
  isInsideHeader = false
}) => {
  let ProgramsQty

  if (type && format)
    ProgramsQty = programs.filter(
      program =>
        program.mbaTypeOfProgram === type && program.mbaFormat === format
    ).length
  else ProgramsQty = programs.length

  return (
    <div
      className={classNames(stls.container, {
        [stls.headerContainer]: isInsideHeader
      })}>
      <span>{ProgramsQty} </span>
      {setString(
        langMenu.qtPrograms,
        false,
        getStringDeclensionNumber(ProgramsQty)
      )}
    </div>
  )
}

export default ProgramsQty
