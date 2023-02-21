import { List, ListItem, ListItemText } from "@mui/material"
import { useNavigate } from "react-router-dom"

const Menu = () => {
    const navigate= useNavigate()
    
    return (
        <List>
            <ListItem onClick={()=>navigate('1')}>
                <ListItemText>Алгоритм 1</ListItemText>
            </ListItem>
            <ListItem onClick={()=>navigate('2')}>
                <ListItemText>Алгоритм 2</ListItemText>
            </ListItem>
            <ListItem onClick={()=>navigate('3')}>
                <ListItemText>Алгоритм 3</ListItemText>
            </ListItem>
        </List>
    )
}

export default Menu