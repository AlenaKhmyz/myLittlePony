import React, {useEffect, useState} from 'react'
import './style.css'


function DragAndDropPage () {
  const [cardList, setCardList] = useState([
    {id: 1, order: 3, text:'КАРТОЧКА 3'},
    {id: 2, order: 1, text:'КАРТОЧКА 1'},
    {id: 3, order: 2, text:'КАРТОЧКА 2'},
    {id: 4, order: 4, text:'КАРТОЧКА 4'}
  ])
//т.к. будем карточки менять местами, нужно запоминать карточку создадим новое состояние
  const [currentCard, setCurrentCard] = useState(null)

  function dragStartHandler(card) {
    setCurrentCard(card)
    console.log(card)
  }

  function dragEndHandler(e) {
    e.target.style.background = 'white'
  }

  function dragOvertHandler(e) {
    e.preventDefault(e)
    e.target.style.background = 'lightgray'
  }

  function dragHandler(e, card) {
    e.preventDefault()
//логика сортировка карточки(меняем их местами)
    setCardList(cardList.map(c => {
      if(c.id === card.id) {
        return{...c, order: currentCard.order}
      }

      if(c.id === currentCard.id) {
        return{...c, order: card.order}
      }

      return c
    }))

    e.target.style.background="white"
  }

//сортировка по порядку
  const sortCards = (a, b) => {
    if (a.order > b.order) {
      return 1
    } else {
      return -1
    }
  }

  return (
    <div className="cardList">
      {cardList.sort(sortCards).map( card=> 
        <div className="card"
//для реализации drag and drop нужно реализовать несколько слушателей событий
//для каждого из этих слушателей необходимо создать функцию, которая будет вызываться.
//далее создаем выше каждую из этих функций
          onDragStart={() => dragStartHandler( card)} //срабатывает в тот момент, когда мы взяли карточку
          onDragLeave={(e) => dragEndHandler(e)} //срабатывает, если мы вышли за пределы другой карточки
          onDragEnd={(e) => dragEndHandler(e)} //если мы отпустили перемещение
          onDragOver={(e) => dragOvertHandler(e)} //если мы находимся над каким-то другим объектом
          onDrop={(e) => dragHandler(e, card)} //если мы отпустили карточку и рассчитываем на то, что что должно произойти связанное с эти действие
          draggable={true}
          >
          {card.text}
        </div>
      )}
    </div>
  )
}

export default DragAndDropPage