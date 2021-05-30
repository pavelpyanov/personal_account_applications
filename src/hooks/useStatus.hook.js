import {useSelector} from 'react-redux'

export const useStatus = (id) => {
  let status = {}
  const statuses = useSelector(state => state.status)
  statuses.forEach(item => {
    if (+item.id === +id) {
      status = item
    }
  })
  return status
}