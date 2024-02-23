const express = require('express');
const mongoose = require('mongoose');
const audioRoutes = require('./routes/audioRoutes');
const transcriptRoutes = require('./routes/transcriptRoutes');

const app = express();


mongoose.connect('mongodb+srv://hemandh:hemandh@cluster0.w6tzhry.mongodb.net/audios?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

app.use(express.json());


app.use('/api/audios', audioRoutes);
app.use('/api/transcript', transcriptRoutes);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
