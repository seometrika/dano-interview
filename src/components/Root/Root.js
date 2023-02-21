
import { AppBar, Box, Button, Container, IconButton, styled, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import { Outlet } from "react-router-dom"

const Root = () => {
    const AppBox = styled(Container)(({ theme }) => ({
        paddingTop: theme.spacing(4),
    }))
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Опрос
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <AppBox>
                <Outlet />
            </AppBox>
        </>
    )
}

export default Root