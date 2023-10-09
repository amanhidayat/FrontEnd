import { Outlet } from "react-router-dom"
import { Navbar } from "../components/navbar"
import { Box } from "@mui/material"
import { Footer } from "../components/footer"



export const NavbarPage = () => {
    return (
        <Box>
            <Navbar />
            <Outlet />
            <Footer />
        </Box>
    )



}