
import './App.css'
import axios from "axios"
import { useEffect } from 'react'
import { useState } from 'react'
import Paginations from './components/Paginations'

function App() {

  //state
  const [userdata, setUserdata] = useState([])
  const [pageInfo, setPageInfo] = useState({
    current_page: 1,
    total_page: 0
  })

  const getAllUser = async () => {
    try {
      const result = await axios.get(`http://localhost:9000/api/users/read?page=${pageInfo.current_page}&limit=10`)
      return result.data
    } catch (error) {
      return error
    }
  }

  const handleChangePage = (e) => {
    setPageInfo(prev => (
      prev = {
        ...prev,
        current_page: e.target.id
      }
    ))
  }

  useEffect(() => {
    getAllUser()
      .then(res => {
        setUserdata(prev => (
          prev = res.data
        ))
        setPageInfo(prev => (
          prev = {
            current_page: res.current_page,
            total_page: res.total_page,
            total_data: res.total_data,
          }
        ))
      })
  }, [pageInfo.current_page])

  useEffect(() => { console.info(pageInfo) }, [pageInfo])

  return (
    <div className="App">
      <h1>Hello </h1>
      {userdata?.map((e) => (
        <div key={e.id}>
          <h3>{e.username}</h3>
        </div>
      ))}

      {pageInfo?.total_page ? <Paginations total_page={pageInfo.total_page} current_page={pageInfo.current_page} handleChangePage={handleChangePage} limit={10} /> : null}
    </div>
  )
}

export default App
