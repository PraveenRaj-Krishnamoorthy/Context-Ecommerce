import { useContext } from "react"
import { productContext } from "./Home"

export const Sidebar = () => {
    const { allProduct, setKeyClick } = useContext(productContext)
    return (
        <>
            <div className="sidebar">
                <table>
                    <tbody>
                        {Object.keys(allProduct).map((e, i) => (
                            <tr key={i}>
                                <td><button onClick={() => { setKeyClick(e) }}>{e}</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}