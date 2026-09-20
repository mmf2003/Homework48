import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

function TaskForm({ onAddTask }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!title.trim() || !description.trim()) {
            return;
        }

        onAddTask({
            id: Date.now(),
            title,
            description,
        });

        setTitle("");
        setDescription("");
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                p: 3,
                mb: 4,
                borderRadius: 2,
                boxShadow: 2,
                bgcolor: "background.paper",
            }}
        >
            <Typography variant="h5" sx={{ mb: 2 }}>
                Add New Task
            </Typography>

            <TextField
                fullWidth
                label="Task title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                sx={{ mb: 2 }}
            />

            <TextField
                fullWidth
                multiline
                rows={3}
                label="Description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                sx={{ mb: 2 }}
            />

            <Button type="submit" variant="contained">
                Add Task
            </Button>
        </Box>
    );
}

export default TaskForm;
