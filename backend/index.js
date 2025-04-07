<<<<<<< HEAD
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log(err));

app.use('/api/jobs', require('./routes/jobs'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
=======
backend/index.js
>>>>>>> faa1e2756edf3f469ca6ec198a9f554dc6b6dd3e
