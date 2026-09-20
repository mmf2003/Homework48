import { useState } from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";

function TaskForm({ onAddTask }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [showErrors, setShowErrors] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!title.trim() || !description.trim()) {
            setShowErrors(true);
            return;
        }

        onAddTask({
            id: Date.now(),
            title: title.trim(),
            description: description.trim(),
        });

        setTitle("");
        setDescription("");
        setShowErrors(false);
    };

    return (
        <Paper
            component="form"
            onSubmit={handleSubmit}
            elevation={0}
            sx={{
                p: { xs: 2.5, sm: 4 },
                borderRadius: 3,
                border: "1px solid",
                borderColor: "divider",
            }}
        >
            <Typography variant="h5" fontWeight={700} sx={{ mb: 0.5 }}>
                Add a new task
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Enter a title and description for your task.
            </Typography>

            <TextField
                fullWidth
                label="Task title"
                placeholder="For example: Learn Material UI"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                error={showErrors && !title.trim()}
                helperText={
                    showErrors && !title.trim() ? "Task title is required" : " "
                }
            />

            <TextField
                fullWidth
                multiline
                minRows={3}
                label="Description"
                placeholder="Describe your task..."
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                error={showErrors && !description.trim()}
                helperText={
                    showErrors && !description.trim()
                        ? "Description is required"
                        : " "
                }
            />

            <Box
                sx={{
                    display: "flex",
                    justifyContent: {
                        xs: "stretch",
                        sm: "flex-end",
                    },
                    mt: 1,
                }}
            >
                <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{
                        px: 4,
                        borderRadius: 2,
                        textTransform: "none",
                        fontWeight: 700,
                    }}
                >
                    + Add Task
                </Button>
            </Box>
        </Paper>
    );
}

export default TaskForm;
