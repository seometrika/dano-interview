import Interview from "./components/Interview"
import { AppBar, Box, Button, Container, IconButton, styled, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import Root from "./components/Root"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Menu from "./components/Menu"

const router = createBrowserRouter([
    {
        path: "/dano-interview",
        element: <Root />,
        children: [
            {
                path:"",
                element:<Menu/>
            },
            {
                path: ":id",
                element: <Interview />,
            },
        ],
    },
])


function App() {
    
    return (
        <RouterProvider router={router} />
    )
}

export default App
