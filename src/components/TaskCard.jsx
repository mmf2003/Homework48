import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
} from "@mui/material";

function TaskCard({ task, onDelete }) {
    return (
        <Card sx={{ height: "100%" }}>
            <CardContent>
                <Typography variant="h6" component="h2" gutterBottom>
                    {task.title}
                </Typography>

                <Typography color="text.secondary">
                    {task.description}
                </Typography>
            </CardContent>

            <CardActions>
                <Button color="error" onClick={() => onDelete(task.id)}>
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default TaskCard;
