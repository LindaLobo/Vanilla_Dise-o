import React from 'react'
import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const DataContext = createContext()

const DataProvider = ({children}) => {

    const [info, setInfo] = useState([])

    const getData = async() => {
        const response = await axios.get('items.json')
        const data = response.data.items
        setInfo(data)
    }

useEffect(()=> {
    getData()
}, [])

  return (
    <DataContext.Provider value={{info}}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider
