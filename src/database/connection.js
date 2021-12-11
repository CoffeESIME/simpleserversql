import sql from "mssql";

const dbsettings = {
  user: "Fabian",
  password: "",
  server: "",
  database: "todos",
  options: {
    trustServerCertificate: true,
  },
};

export async function getConnection() {
  try {
    const pool = await sql.connect(dbsettings);
    return pool;
  } catch (error) {
    console.log(error);
  }
}
