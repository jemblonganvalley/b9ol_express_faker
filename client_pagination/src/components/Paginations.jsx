import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


const Paginations = ({ current_page, total_page, handleChangePage, limit = 5 }) => {

    const [ttl, setTtl] = useState([])

    const renderItem = () => {
        let tp = []
        for (let index = 0; index < total_page; index++) {
            tp.push(index)
        }
        let sl = tp.splice(0, limit)
        setTtl(sl)
    }

    useEffect(() => {
        renderItem()
    }, [])

    return (
        <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <h4>pagination</h4>
            {ttl?.map((e, i) => (
                <span key={i} id={i + 1} style={{
                    color: "white",
                    backgroundColor: i + 1 == current_page ? "blue" : "",
                    width: 26,
                    height: 26,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: 'center',
                    userSelect: "none",
                    cursor: "pointer"
                }}
                    onClick={handleChangePage}
                >{i + 1}</span>
            ))}
        </div>
    )
}

export default Paginations