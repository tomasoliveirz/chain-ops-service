import { buildServer } from "./api/server";
import "dotenv/config";

const port = Number(process.env.PORT ?? 3000);
const app = buildServer();

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});