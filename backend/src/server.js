import app from "./app.js";
import env from "./config/env.js";
import connectDB from "./config/db.js";

const { port, appName, nodeEnv } = env;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`[server] ${appName} listening on port ${port} (${nodeEnv})`);
    });
  } catch (error) {
    console.error("[startup] Failed to start server", error);
    process.exit(1);
  }
};

startServer();
