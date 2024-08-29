import { useEffect, useState } from "react"

export const Checkout = () => {
    const [received, setReceived] = useState([])
    const [count, setCount] = useState()
    const [total, setTotal] = useState()
    useEffect(() => {
        let retriveData = localStorage.getItem("myProducts")
        retriveData = JSON.parse(retriveData)
        let added = []
        let count = 0
        let amount = 0
        for (var key in retriveData) {
            for (var obj of retriveData[key]) {
                if (obj.count > 0) {
                    added.push(obj)
                    count += obj.count
                    amount += obj.price
                }
            }
        }
        setReceived(added)
        setCount(count)
        setTotal(amount)
    }, [])

    return (
        <>
            {/* {received.length === 0 && <h1 style={{ color: "red", fontFamily: "cursive" }}>No Products Selected</h1>} */}
            {received.length > 0 && <div className="checkout">
                <table>
                    <thead>
                        <tr >
                            <th>ref.</th>
                            <th>name</th>
                            <th>color</th>
                            <th>count</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {received.map((e, i) => (
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.color}</td>
                                <td>{e.count}</td>
                                <td>{e.price}</td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={3}>Total</td>
                            <td>{count}</td>
                            <td>{total}</td>
                        </tr>
                    </tbody>
                </table>
            </div>}
        </>
    )
}