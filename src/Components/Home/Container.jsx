import { useContext, useEffect, useState } from "react"
import { productContext } from "./Home"

export const Container = () => {
    const { allProduct, keyClick, setKeyClick, setAllProduct, isAll, setIsAll, input } = useContext(productContext)
    const [show, setShow] = useState()

    useEffect(() => {
        if (input) {
            setIsAll(false)
            setShow("")
            const filtered = Object.values(allProduct).flat().filter((e, i) => e.name.toLowerCase().startsWith(input.toLowerCase()))
            setShow(filtered)
        } else if (isAll) {
            setShow("")
            let arr = []
            for (var keys in allProduct) {
                for (var obj of allProduct[keys]) {
                    arr.push(obj)
                }
            }
            setShow(arr)
        } else if (keyClick !== "") {
            setShow("")
            let arr = []
            for (var key in allProduct) {
                if (key === keyClick) {
                    arr.push(allProduct[key])
                }
            }
            setShow(...arr)
        } else {
            setShow("")
        }
    }, [allProduct, isAll, keyClick, setKeyClick, input, setIsAll])

    useEffect(() => {
        let fromStorage = localStorage.getItem("myProducts")
        fromStorage = JSON.parse(fromStorage)
        if (fromStorage !== null) {
            setIsAll(true)
        }
        return () => {

        }
    }, [setIsAll])

    const count = (id, x) => {
        setAllProduct((prevState) => {
            for (const category in prevState) {
                for (const product of prevState[category]) {
                    if (x === "+") {
                        if (product.id === id) {
                            product.count += 1;
                        }
                        if (product.count > 5) {
                            product.count = 0
                        }
                    } else {
                        if (product.id === id) {
                            product.count += -1;
                        }
                        if (product.count < 0) {
                            product.count = 0
                        }
                    }
                }
            }
            return { ...prevState };
        });
    }

    return (
        <>
            <div className="container">
                {
                    show && show.map((e, i) => (
                        <div className="show" key={e.id}>
                            <img src={e.img} alt="" />
                            <div className="data">
                                <h2>Name - {e.name}</h2>
                                <h3>Color - {e.color}</h3>
                                <h3>Price - {e.price}</h3>
                                <h4>Count - {e.count}</h4>
                                <h5>
                                    <button className="plus" onClick={() => { count(e.id, "+") }}>+</button> &nbsp;
                                    <button className="minus" onClick={() => { count(e.id, "-") }}>-</button>
                                </h5>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}