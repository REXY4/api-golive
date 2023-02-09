const Sequelize = require('sequelize');

const start = async (db_name,username,password,host,port,dialect) =>{
    const sequelize = new Sequelize(db_name, username, password, {
        host,
        port,
        dialect,
      });

  sequelize
  .authenticate()
  .then(() => {
    console.log({
        "status" : "success",
        "message" : `connection db ${dialect}`,
        database : db_name,
        host,
        port,
        dialect,
    });
  })
  .catch(err => {
    console.error('connection failed', err);
  });
}




module.exports =  start;  
