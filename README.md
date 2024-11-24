# BACKEND

<!-- node.js => runtime 
which uses the javascript as programming laguage to run the servers  -->
<!-- 
HTTP request structures:

GET /user http/1.1

http verb, endpoint,version of the http -->
<!-- content-type:application/json
content-type:text/pdf
Authorization:Token -->

<!-- Movie-Application

GET/
POST /login
post /signup
post /movie - create movie
GET /movieid/details - reviews


1.npm init => amswer the questions
2.movie project d
description also same we can put

better we can we 
npm init -y -->


app.put('/courses/:id', (req, res) => {
    const courseId = parseInt(req.params.id);
    const { title, description } = req.body;

    const data = readData();
    const courseIndex = data.courses.findIndex((course) => course.id === courseId);

    if (courseIndex === -1) {
        return res.status(404).json({ message: `Course with ID ${courseId} not found` });
    }

    if (title) data.courses[courseIndex].title = title;
    if (description) data.courses[courseIndex].description = description;

    writeData(data);
    res.status(200).json({ message: 'Course updated successfully', course: data.courses[courseIndex] });
});

// Delete Course (DELETE Route)
app.delete('/courses/:id', (req, res) => {
    const courseId = parseInt(req.params.id);

    const data = readData();
    const courseIndex = data.courses.findIndex((course) => course.id === courseId);

    if (courseIndex === -1) {
        return res.status(404).json({ message: `Course with ID ${courseId} not found` });
    }

    const deletedCourse = data.courses.splice(courseIndex, 1);
    writeData(data);
    res.status(200).json({ message: 'Course deleted successfully', course: deletedCourse });
});



