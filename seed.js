const dotenv = require("dotenv");

dotenv.config();
require('./config/database');
const posts = require('./models/post');
const data = [
  {
      userName: "Fred", 
      title: "Fred's Post Title",
      post: "Post about Fred's day!"
    },
  {
      userName: "Jimena", 
      title: "Jimena's Post Title",
      post: "Post about Jimena's day!"
    },
  {
      userName: "Alice", 
      title: "Alice's Post Title",
      post: "Post about Alice's day!"
    },
  {
      userName: "Rahul", 
      title: "Rahul's Post Title",
      post: "Post about Rahul's day!"
    },
];
posts.insertMany(data).then(response => console.log(response));
