
module.exports = {
    db: "mongodb+srv://julioblanco:48501iX@cluster0.fhj7k.mongodb.net/agenda?retryWrites=true&w=majority",
  };

/*
mongoose
  .connect( "mongodb+srv://julioblanco:48501iX@cluster0.fhj7k.mongodb.net/agenda?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

var db = mongoose.connection;
db.once("open", () => {
  console.log("Connected to mongoDB");
});
*/

  //mongodb+srv://julioblanco:<password>@cluster0.fhj7k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority