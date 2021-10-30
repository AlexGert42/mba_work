import { ReactComponentElement } from 'react'
import Popup from 'reactjs-popup'

type PopupInfoPropsType = {
  title: string
  icon: ReactComponentElement<React.FC>
}

const PopupInfo: React.FC<PopupInfoPropsType> = ({title, icon}) => {

  return (
    <>
      {title}

      {/*{icon}*/}


      <Popup
        trigger={open => <p>{icon}</p>}
        position="right center"
      >
        <div>Popup content here !!</div>
      </Popup>
    </>
  )
}

export default PopupInfo