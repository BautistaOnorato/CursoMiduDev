import { useState } from "react"
import { selectSupabase } from "../serivces/requests"

export const useRequest = ({ tabla, columna }) => {
  const [data, setData] = useState([])

  const getData = async () => {
    try {
      const newData = await selectSupabase(tabla, columna)
      setData(newData)
    } catch (error) {
      throw new Error('Error getting ' + tabla)
    }
  }

  return { data, getData }
}
