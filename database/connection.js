//COde for database connection
const {Sequelize,DataTypes}=require("sequelize")
const sequelize=new Sequelize(process.env.DB_URL)

sequelize.authenticate()
.then(()=>{
    console.log("Authentication successful");
})
.catch((err)=>{
    console.log("Error found"+err);
})

const db={}
db.Sequelize=Sequelize
db.sequelize=sequelize

db.books=require('./models/book.model')(sequelize,DataTypes)

//Migration code
sequelize.sync({alter:false}).then(()=>{
    console.log("Successfully migrated");
})
module.exports=db