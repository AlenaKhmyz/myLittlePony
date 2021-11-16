import React, {useEffect} from 'react'
import 'style.css'


function DragAndDropPage () {
  const [cardList, setCardList] = useState([
    {id: 1, order: 3, text:'КАРТОЧКА 3'},
    {id: 2, order: 1, text:'КАРТОЧКА 1'},
    {id: 3, order: 2, text:'КАРТОЧКА 2'},
    {id: 4, order: 4, text:'КАРТОЧКА 4'}
  ])

  return (
    <div className="cardList">
      {cardList.map( card=> 
        <div className="card"
          onDragStart={}
          onDragLeave={}
          onDragEnd={}
          onDragOver={}
          onDrop={}
          draggable={true}>
          {card.text}
        </div>
      )}
    </div>
  )
}

export default DragAndDropPage