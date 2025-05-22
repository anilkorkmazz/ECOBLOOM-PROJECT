import { useRoutes } from "react-router-dom";
import routes from "./routes.jsx";

export default function RouterConfig() {
    return useRoutes(routes);
}
