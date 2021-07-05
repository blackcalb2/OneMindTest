import axios from 'axios'
import { useCallback, useState } from 'react'

axios.defaults.baseURL = 'http://localhost:4000/api'

function useAxios<T>(method: string = 'GET', wait: Boolean = false) {
  const [loading, setLoading] = useState<Boolean>(true)
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState('')

  const fetchData = useCallback((url: string) => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { data, error, loading, fetchData }
}

export default useAxios
