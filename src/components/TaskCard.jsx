import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Chip,
    Typography,
} from "@mui/material";

function TaskCard({ task, onDelete }) {
    return (
        <Card
            variant="outlined"
            sx={{
                height: "100%",
                minHeight: 230,
                display: "flex",
                flexDirection: "column",
                borderRadius: 3,
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 4,
                },
            }}
        >
            <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Chip
                    label="TASK"
                    size="small"
                    color="primary"
                    variant="outlined"
                    sx={{
                        mb: 2,
                        fontWeight: 700,
                    }}
                />

                <Typography
                    variant="h6"
                    component="h2"
                    fontWeight={700}
                    gutterBottom
                >
                    {task.title}
                </Typography>

                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                        lineHeight: 1.7,
                    }}
                >
                    {task.description}
                </Typography>
            </CardContent>

            <Box
                sx={{
                    borderTop: "1px solid",
                    borderColor: "divider",
                }}
            >
                <CardActions sx={{ p: 2 }}>
                    <Button
                        color="error"
                        size="small"
                        onClick={() => onDelete(task.id)}
                        sx={{
                            textTransform: "none",
                            fontWeight: 600,
                        }}
                    >
                        Delete
                    </Button>
                </CardActions>
            </Box>
        </Card>
    );
}

export default TaskCard;
