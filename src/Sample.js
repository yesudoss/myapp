import React, { useEffect, useState } from 'react'

export default function Sample() {

    const [data, setData] = useState([1, 2, 3]);
    const [data1, setData1] = useState([6, 4, 5]);
    console.log('data: ', data);

    // useEffect(() => {
    //     console.log("I'm in");
    //     setTimeout(() => {
    //         setData(10)
    //     }, 2000)
    // }, [])

    // function changeData(event) {
    //     setData({ ...data, [event.target.name]: event.target.value })
    // }

    function changeData(event) {
        setData(state => [...state, event.target.value])
        setData([...data, ...data1])
    }

    return (
        <div>
            name: {data.name} <br />
            address: {data.address}
            <input name="address" onChange={changeData} />
            <button onClick={() => setData(data + 1)}>Click</button>
        </div>
    )
}
