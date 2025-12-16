import app from "./app.js";
import env from "./config/env.js";

const { port, appName, nodeEnv } = env;

app.listen(port, () => {
  console.log(`[server] ${appName} listening on port ${port} (${nodeEnv})`);
});
