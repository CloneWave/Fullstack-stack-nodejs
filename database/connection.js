//COde for database connection
const {Sequelize,DataTypes}=require("sequelize")
const sequelize=new Sequelize("postgresql://postgres.lhpcigdchpbnwfbqjftq:clonewave(777)@aws-1-ap-northeast-1.pooler.supabase.com:6543/postgres")

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

module.exports=db