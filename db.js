const Pool = require("pg").Pool;
const fs = require("fs");
const pool = new Pool({
  user: "postgres",
  password: "postgres",
  database: "perntodo",
  port: 5432,
  host: "database-1.cgcszzcgyegq.us-east-1.rds.amazonaws.com",
 ssl: {
    rejectUnauthorized: false,
    ca: fs.readFileSync('/home/ec2-user/todo_project/backend/rds-cert/us-east-1-bundle.pem').toString(),
},  
});

module.exports = pool;
