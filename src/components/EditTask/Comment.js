import React from 'react'
import {useGetMonthName} from '../../hooks/useGetMonthName'

export const Comment = ({commentList}) => {
  const getMonthName = useGetMonthName()
  let countComments
  if (commentList) {
    countComments = commentList.map(item => item.comment)
  }
  if (countComments && countComments.length) {
    return(
      <>
        {commentList.map((item) => {
          if (item.comment !== null) {
            const date = new Date(item.createdAt)
            const monthName = getMonthName(date.getMonth())
            const dateStr = `${date.getDate()} ${monthName}, ${date.getHours()}:${date.getMinutes()} прокомментировано`
            return (
              <div key={item.id} className='comment'>
                <div className="comment__head">
                  <div className="comment__head_left"></div>
                  <div className="comment__head_right">
                    <span className="comment__head_name">Иванов Александр</span>
                    <span className="comment__head_date">{dateStr}</span>
                  </div>
                </div>
                <div className="comment__content">{item.comment}</div>
              </div>
            )
          }
        })}
      </>
    )
  }
  return(
    <div className='comment'>
      <div className="comment__head">
      <div className="comment__head_right">
        <span className="comment__head_name">Комментариев пока нет</span>
      </div>
    </div>
    </div>
  )
}
