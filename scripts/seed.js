var mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
    // `name` must be unique and of type String
    name: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    priorities:
    {
        type: Array, "default": []
    },
    todos:
    {
        type: Array, "default": []
    }
});

// This creates our model from the above schema, using mongoose's model method
const User = mongoose.model("User", UserSchema);
mongoose.connect("mongodb://localhost/Prioritize", { useNewUrlParser: true });

const userSeed = [
    {
        name: "Tess",
        password: "123",
        priorities: [
            {
                id: 1,
                text: 'Write a cool JS library',
            }
        ],
        todos: [
            {
                id: 1,
                text: 'Buy Cat Food',
            }
        ]
    },
    {
        name: "will",
        password: "345",
        priorities: [
            {
                id: 1,
                text: 'Write a cool JS library',
            }
        ],
        todos: [
            {
                id: 1,
                text: 'Buy litty Food',
            }
        ]
    }
]
User
    .remove({})
    .then(User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(err))
