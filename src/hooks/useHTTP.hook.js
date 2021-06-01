import {useCallback} from "react";
import {useDispatch} from 'react-redux'
import {hideLoading, showLoading} from '../redux/actions'

export const useHTTP = () => {
  const dispatch = useDispatch()
  const request = useCallback(async (url, method = "GET", body = null, headers = {}) => {
    try {
      dispatch(showLoading())
      if (body) {
        body = JSON.stringify(body)
        headers["Content-Type"] = "application/json"
      }
      const response = await fetch(url, {method, body, headers})
      if (method === 'PUT') return
      const data = await response.json()

      if (!response.ok) {
        throw new Error('Ошибка сервера')
      }

      return data
    } catch (e) {
      console.log(e)
    }
    finally {
      dispatch(hideLoading())
    }
  }, [])


  return {request}
}