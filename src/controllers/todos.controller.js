import { getConnection } from "../database/connection.js";
import sql from "mssql";

export const getTODOS = async (req, res) => {
  const pool = await getConnection();
  const result = await pool
    .request()
    .query(
      "SELECT [text],[completed] FROM [dbo].[lista]"
    );
    res.statusCode=200;
    res.setHeader("Content-Type","application/json");
    
  res.json(result.recordset);
};
export const addTodo= async (req,res)=>{
    const { tarea, completada} =req.body;
  const pool = await getConnection();
  pool
    .request()
    .input("tarea", sql.VarChar, tarea)
    .input("completada", sql.Bit, completada)
    .query(
      "INSERT INTO [dbo].[lista] ([text],[completed]) VALUES (@tarea, @completada)"
    );
  res.json("nuevos datos");
}

export const deleteTodo= async(req,res)=>{
  const pool = await getConnection();
  pool
    .request()
    .input("tarea", req.params.id)
    .query`DELETE FROM [dbo].[lista] WHERE [text]= @tarea`;
  res.json("nuevos datos");
}

export const updateTodo= async (req,res)=>{
  const {tarea, completed}= req.body;
  console.log(`Tarea: ${tarea} Completed:${completed}`)
  console.log(typeof(tarea))
  console.log(typeof(completed))

  const pool= await getConnection();
  pool
  .request()
  .query`UPDATE [dbo].[lista] SET [completed] =${completed} WHERE [text]=${tarea}`
}


export const updateTodotext= async (req,res)=>{
  const {tareaAntes,tareaDespues}= req.body;
  console.log(`Tarea: ${tareaAntes} Actualizacion:${tareaDespues}`)
  console.log(typeof(tareaDespues))
  console.log(typeof(tareaAntes))
  const pool= await getConnection();
  pool
  .request()
  .input("todoAntes", sql.VarChar, tareaAntes)
  .input("todoDespues", sql.VarChar, tareaDespues)
  .query`UPDATE [dbo].[lista] SET [text]=@todoDespues, [completed]=0 WHERE [text]=@todoAntes`
}
