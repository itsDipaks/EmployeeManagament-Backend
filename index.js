const express = require("express");
const cors =require("cors");
const { AuthRouter } = require("./src/Routes/AuthRoutes");
const { EmployeeRouter } = require("./src/Routes/EmployesRoutes");
const { ProjectRouter } = require("./src/Routes/ProjectRoute");
const { FeedsRouter } = require("./src/Routes/FeedsRoutes");
const { TodoRouter } = require("./src/Routes/TodoRoutes");
const { TaskRouter } = require("./src/Routes/Task.Route");
const { Connection } = require("./src/Config/db");
const app = express();
app.use(cors())
app.use(express.json());

// ===== Routes =======
app.get("/",(req,res)=>{
  res.send("This Is Adobe Social Media App Backend")
})

app.use("/auth",AuthRouter)
app.use("/employee",EmployeeRouter)
app.use("/project",ProjectRouter)
app.use("/feed",FeedsRouter)
app.use("/task",TaskRouter)
app.use("/todo",TodoRouter)

// =======Connection======
app.listen(8500, async () => {
  try {
    await Connection
    console.log("http://localhost:8500")
  }
   catch (error) {
    console.log("Error in Connections",error);
    
  }
});
