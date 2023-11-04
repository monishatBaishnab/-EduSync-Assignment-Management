// Import required modules and libraries
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require('dotenv').config();

// Initialize the Express application
const app = express();
const port = process.env.PORT || 5000;

// Middleware setup
app.use(cors({
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

const verifyAuth = (req, res, next) => {
    // Retrieve the token from the request cookies
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized access' });
    }

    // Verify the token using the SECRET_KEY
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            // If there's an error during token verification, send an unauthorized response
            res.status(401).json({ error: 'Unauthorized access' });
        } else {
            // If the token is valid, set the user information in the request object and proceed to the next middleware
            req.user = decoded;
            next();
        }
    });
};

// MongoDB URI for connecting to the database
const uri = "mongodb://localhost:27017";
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.viujuo0.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoDB client instance
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
})

// Function to interact with MongoDB
const mongodbRun = async () => {
    try {
        // Connect to the MongoDB database
        await client.connect();

        // Access the 'services' collection within the 'emaJohnDB' database
        const assignmentCollection = client.db('EduSync').collection('assignments');

        //Define API routes for genarate token
        app.post('/api/v1/token', (req, res) => {
            try {
                const user = req.body;
                const token = jwt.sign(user, process.env.SECRET_KEY, { expiresIn: '1h' });
                res.cookie('token', token, { httpOnly: true, secure: false, sameSite: 'none' }).send({ message: 'Success' });
            } catch (error) {
                console.log(error.message);
                res.status(500).json({ error: "An error occurred" });
            }
        })

        //Define API for get all assignments
        // this api use many cases
        // case 1: http://localhost:5000/api/v1/assignments
        // case 2: http://localhost:5000/api/v1/assignments?difficulty=medium
        // case 3: http://localhost:5000/api/v1/assignments?difficulty=medium&sort=marks&sortOrder=desc
        // case 4: http://localhost:5000/api/v1/assignments?page=2&offset=5

        app.get('/api/v1/assignments', async (req, res) => {
            try {
                // Initialize objects for filtering and sorting
                const filterObj = {};
                const sortObj = {};

                // Retrieve query parameters from the request
                const difficulty = req.query.difficulty;
                const sort = req.query.sort;
                const sortOrder = req.query.sortOrder;
                const offset = parseInt(req.query.offset);
                const page = parseInt(req.query.page);

                // If sorting parameters are provided, add them to the sortObj
                if (sort && sortOrder) {
                    sortObj[sort] = sortOrder;
                }

                // If a difficulty parameter is provided, add it to the difficultyObj
                if (difficulty) {
                    filterObj.difficulty = difficulty;
                }

                const count = await assignmentCollection.estimatedDocumentCount();

                if (offset && page) {
                    // Query the assignmentCollection with the filter and sorting options
                    const result = await assignmentCollection.find(filterObj).sort(sortObj).limit(offset).skip((page - 1) * offset).toArray();
                    // Send the results as a response
                    res.send({ count, assignments: result });
                }
                else {
                    // Query the assignmentCollection with the filter and sorting options
                    const result = await assignmentCollection.find(filterObj).sort(sortObj).toArray();
                    // Send the results as a response
                    res.send({ count, assignments: result });
                }

            } catch (error) {
                console.log(error.message);
                res.status(500).json({ error: "An error occurred" });
            }
        })

        //Define API for get a specific assingment
        // case 1: http://localhost:5000/api/v1/assignments/65466adbab69dc9d9cc25c2f?email=baishnabmonishat@gmail.com
        app.get('/api/v1/assignments/:id', verifyAuth, async (req, res) => {
            try {
                const user = req.user;
                const email = req.query.email;
                const assignmentId = req.params.id;

                if (user.email === email) {
                    const result = await assignmentCollection.findOne({ _id: new ObjectId(assignmentId) });
                    res.send(result);
                }
                else {
                    res.status(500).json({ error: "An error occurred" });
                }
            } catch (error) {
                res.status(500).json({ error: "An error occurred" });
            }
        });

        //Define API for post a new assignment
        // case 1: http://localhost:5000/api/v1/assignments
        // assignment: {
        //     "title": "Assignment 8",
        //     "description": "Write a report on a current topic in computer science.",
        //     "marks": 10,
        //     "thumbnailImageURL": "https://example.com/assignment8_thumbnail.jpg",
        //     "difficulty": "easy",
        //     "dueDate": "2024-01-15"
        //     "user": {
        //         "email": "baishnabmonishat@gmail.com"
        //     }
        // }
        app.post('/api/v1/assignments', verifyAuth, async (req, res) => {
            try {
                const email = req.query.email;
                const user = req.user;
                const assignment = req.body;
                if (user.email === email) {
                    const result = await assignmentCollection.insertOne(assignment);
                    res.send(result);
                } else {
                    res.status(500).json({ error: "An error occurred" });
                }
            } catch (error) {
                console.log(error.message);
                res.status(500).json({ error: "An error occurred" });
            }
        })


        // Check the connection to MongoDB by sending a ping request
        await client.db('admin').command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

    } catch (error) {
        console.log(error);
    }
}

mongodbRun();

// Start the Express server and listen on the defined port
app.listen(port, () => console.log("Server Running..."));