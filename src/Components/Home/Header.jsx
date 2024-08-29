import { useContext, useEffect, useState } from "react"
import { productContext } from "./Home"
import { useNavigate } from "react-router-dom"

export const Header = () => {
    const { isAll, setIsAll, allProduct, input, setInput } = useContext(productContext)

    const [total, setTotal] = useState()
    const navigate = useNavigate()

    const checkout = () => {
        if (total > 0) {
            localStorage.setItem("myProducts", JSON.stringify(allProduct))
            navigate("/checkout")
        } else {
            localStorage.removeItem("myProducts")
            alert("No Products Selected")
            navigate("/")
        }
    }

    useEffect(() => {
        const sum = Object.values(allProduct).flat()
        let tot = 0
        for (var obj of sum) {
            tot += obj.count
        }
        setTotal(tot)
    }, [total, allProduct])

    const searchIt = (event) => {
        setInput(event.target.value)
    }

    return (
        <>
            <div className="header">
                <div className="input">
                    <input type="text" name="isInput" value={input} onChange={searchIt} id="" placeholder="search product.." />
                </div>
                <div className="check">
                    <input type="checkbox" checked={isAll} value={isAll} onChange={(e) => { setIsAll(e.target.checked) }} name="" id="" /> &nbsp; ALL
                </div>
                <div className="checkout-btn">
                    <button onClick={checkout}>Checkout</button>
                </div>
                <div className="total">
                    <h1>Total: {total} </h1>
                </div>
            </div>
        </>
    )
}