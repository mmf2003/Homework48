import { useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskCard from "./components/TaskCard";

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Learn Material UI",
            description: "Learn how to use Material UI components in React.",
        },
        {
            id: 2,
            title: "Finish Homework",
            description: "Complete the React UI library homework.",
        },
    ]);

    const handleAddTask = (task) => {
        setTasks((prevTasks) => [...prevTasks, task]);
    };

    const handleDeleteTask = (id) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    return (
        <>
            <Header />

            <Container maxWidth="lg">
                <Box sx={{ py: 5 }}>
                    <TaskForm onAddTask={handleAddTask} />

                    <Typography variant="h5" sx={{ mb: 3 }}>
                        My Tasks
                    </Typography>

                    {tasks.length === 0 ? (
                        <Typography color="text.secondary">
                            No tasks yet.
                        </Typography>
                    ) : (
                        <Grid container spacing={3}>
                            {tasks.map((task) => (
                                <Grid
                                    key={task.id}
                                    size={{
                                        xs: 12,
                                        sm: 6,
                                        md: 4,
                                    }}
                                >
                                    <TaskCard
                                        task={task}
                                        onDelete={handleDeleteTask}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    )}
                </Box>
            </Container>
        </>
    );
}

export default App;
