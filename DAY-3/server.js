const express = require('express');
const fs = require('fs');
const readline = require('readline');

// Initialize Express app
const app = express();
app.use(express.json()); // Middleware to parse JSON

const PORT = 3000;
const dbPath = './db.json';

// Helper functions to read and write data
const readData = () => {
    const data = fs.readFileSync(dbPath, 'utf-8');
    return JSON.parse(data);
};

const writeData = (data) => {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

// Create Course (POST Route)
app.post('/courses', (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ message: 'Title and description are required' });
    }

    const data = readData();
    const newCourse = {
        id: data.courses.length + 1,
        title,
        description,
    };

    data.courses.push(newCourse);
    writeData(data);

    res.status(201).json({ message: 'Course added successfully', course: newCourse });
});

// Read Courses (GET Route)
app.get('/courses', (req, res) => {
    const data = readData();
    res.status(200).json(data.courses);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    promptForCourseData(); // Start the terminal input process
});

// Function to prompt for course data from the terminal
const promptForCourseData = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question('Do you want to add a new course? (yes/no): ', (answer) => {
        if (answer.toLowerCase() === 'yes') {
            rl.question('Enter course title: ', (title) => {
                rl.question('Enter course description: ', (description) => {
                    const data = readData();
                    const newCourse = {
                        id: data.courses.length + 1,
                        title,
                        description,
                    };

                    data.courses.push(newCourse);
                    writeData(data);

                    console.log('Course added successfully:', newCourse);
                    rl.close();
                });
            });
        } else {
            console.log('No new course added.');
            rl.close();
        }
    });
};
