import { DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";


interface Props {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavBar({ darkMode, setDarkMode }: Props) {
    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant='h6'>Re-Store</Typography>
                    <IconButton onClick={() => setDarkMode(!darkMode)}>
                        {darkMode ? <DarkMode/> : <LightMode sx={{color: 'yellow'}}/>}
                    </IconButton>
            </Toolbar>
        </AppBar>
    );
}