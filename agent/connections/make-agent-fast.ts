import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://makeagent.fast/api/mcp",
  description: "Create customer-service agents, review conversations and leads, and manage the chat widget.",
  auth: connect("makeagent.fast/" + process.env.VERCEL_PROJECT_ID),
});
