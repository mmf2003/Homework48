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
        {
            id: 3,
            title: "Deploy Project",
            description: "Deploy the finished application to Vercel.",
        },
    ]);

    const handleAddTask = (task) => {
        setTasks((prevTasks) => [...prevTasks, task]);
    };

    const handleDeleteTask = (id) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                backgroundColor: "#f7f8fa",
            }}
        >
            <Header taskCount={tasks.length} />

            <Container maxWidth="lg">
                <Box sx={{ py: { xs: 4, md: 6 } }}>
                    <Box
                        sx={{
                            textAlign: "center",
                            mb: 4,
                        }}
                    >
                        <Typography
                            variant="h4"
                            component="h2"
                            fontWeight={700}
                            gutterBottom
                        >
                            My Task Manager
                        </Typography>

                        <Typography color="text.secondary">
                            Create and manage your daily tasks
                        </Typography>
                    </Box>

                    <TaskForm onAddTask={handleAddTask} />

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            mt: 6,
                            mb: 3,
                        }}
                    >
                        <Typography variant="h5" fontWeight={700}>
                            My Tasks
                        </Typography>

                        <Typography color="text.secondary">
                            {tasks.length} total
                        </Typography>
                    </Box>

                    {tasks.length === 0 ? (
                        <Box
                            sx={{
                                textAlign: "center",
                                py: 8,
                            }}
                        >
                            <Typography variant="h6" color="text.secondary">
                                No tasks yet
                            </Typography>

                            <Typography variant="body2" color="text.secondary">
                                Add your first task using the form above.
                            </Typography>
                        </Box>
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
        </Box>
    );
}

export default App;
