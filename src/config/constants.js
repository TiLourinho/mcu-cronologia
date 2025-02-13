import path, { dirname } from "path";
import { fileURLToPath } from "url";

const appPath = fileURLToPath(import.meta.url);

export const PORT = 3000;
export const ROOT_DIR = dirname(appPath).replace("/config", "");
export const VIEWS_DIR = path.join(ROOT_DIR, "views");
