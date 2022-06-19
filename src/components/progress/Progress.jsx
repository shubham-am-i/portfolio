import './progress.css'
import { useState } from 'react'

function Progress({ done, color }) {
  const [style, setStyle] = useState({})
  let gradient=''
  let colour=''

  switch (color) {
    case 'blue':
      gradient = `linear-gradient(315deg, #63a4ff 0%, #83eaf1 74%)`
      colour = '#63a4ff'
      break

      case 'darkBlue':
        gradient = `linear-gradient(315deg, #eec0c6 0%, #7ee8fa 34%)`
        colour = '#eec0c6'
        break;

      case 'lightBlue':
        gradient = 'linear-gradient(315deg, #52a7c1 0%, #b3f6d8 74%)'
        colour = '#52a7c1'
        break;

      case 'singerBlue':
        gradient = 'linear-gradient(315deg, #bfe299 0%, #66b5f6 74%)'
        colour = '#bfe299'
        break;

      case 'steelBlue':
        gradient = 'linear-gradient(315deg, #9cdaf8 0%, #98fcbd 74%)'
        colour = '#9cdaf8'
        break;

        default:
          break;
  
  }



  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
      backgroundColor: colour,
      backgroundImage: gradient,
    }

    setStyle(newStyle)
  }, 1000)

  return (
    <div className='progress'>
      <div className='progress-done' style={style}>
        {done}%
      </div>
    </div>
  )
}

export default Progress
