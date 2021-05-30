import React from 'react'

export const Comment = ({commentList}) => {
  if (commentList && commentList.length) {
    return(
      <>
        {commentList.map((item) => {
          const date = new Date(item.createdAt)
          const dateStr = `${date.getDate()} ${date.getMonth()}, ${date.getHours()}:${date.getMinutes()} прокомментировано`
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
