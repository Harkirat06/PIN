import React from "react"
import "@testing-library/jest-dom"
import {prettyDOM, render} from "@testing-library/react"

test("",()=>{
    const componente = render(<h1>Hola Mundo</h1>)
    const h1 = componente.getByText("Hola Mundo")
    console.log(prettyDOM(h1))
})
