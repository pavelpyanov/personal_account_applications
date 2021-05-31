import {useCallback} from "react";

export const useHTTP = () => {
  const request = useCallback(async (url, method = "GET", body = null, headers = {}) => {
    try {
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
  }, [])


  return {request}
}