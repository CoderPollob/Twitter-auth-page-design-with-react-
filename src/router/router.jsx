import { createBrowserRouter } from "react-router-dom";
import publiceRouter from "./PublicRouter";
import privateRouter from "./privateRouter";

// Create Browser Router
const router = createBrowserRouter([...publiceRouter, ...privateRouter]);

// export default router
export default router;
