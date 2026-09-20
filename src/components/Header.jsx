import { AppBar, Toolbar, Typography } from "@mui/material";

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="h1">
                    Task Manager
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
