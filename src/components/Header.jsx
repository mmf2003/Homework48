import {
    AppBar,
    Box,
    Chip,
    Container,
    Toolbar,
    Typography,
} from "@mui/material";

function Header({ taskCount }) {
    return (
        <AppBar
            position="static"
            elevation={0}
            sx={{
                background: "linear-gradient(90deg, #1976d2, #536dfe)",
            }}
        >
            <Container maxWidth="lg">
                <Toolbar
                    disableGutters
                    sx={{
                        minHeight: 72,
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <Box>
                        <Typography
                            variant="h5"
                            component="h1"
                            fontWeight={700}
                        >
                            Task Manager
                        </Typography>

                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                            Manage your daily tasks
                        </Typography>
                    </Box>

                    <Chip
                        label={`${taskCount} tasks`}
                        sx={{
                            backgroundColor: "rgba(255,255,255,0.18)",
                            color: "white",
                            fontWeight: 600,
                        }}
                    />
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
