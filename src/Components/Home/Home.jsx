
import { Container } from "./Container"
import { Header } from "./Header"
import { Sidebar } from "./Sidebar"
import { createContext, useState } from "react"
import allData from "../../Data/Data.json"


export const productContext = createContext()

export const Home = () => {
    const [allProduct, setAllProduct] = useState({ ...allData })
    const [keyClick, setKeyClick] = useState("")
    const [isAll, setIsAll] = useState(false)
    const [input, setInput] = useState("")
    // console.log(input)

    return (
        <>
            <productContext.Provider value={{ allProduct, setAllProduct, keyClick, setKeyClick, isAll, setIsAll, input, setInput }}>
                <div className="home">
                    <Header />
                    <Sidebar />
                    <Container />
                </div>
            </productContext.Provider>
        </>
    )
}