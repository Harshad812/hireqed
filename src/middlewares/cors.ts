import { NextRequest } from "next/server";

export default function corsMiddleware(req: NextRequest): void {
  const allowedOrigins = ["*"];
  const allowedMethods = ["GET", "POST", "PUT", "DELETE", "OPTIONS"];

  const origin = req.headers.get("origin") || "";
  const method = req.method;

  if (allowedOrigins.includes("*") || allowedOrigins.includes(origin)) {
    req.headers.set("Access-Control-Allow-Origin", origin);
    req.headers.set("Access-Control-Allow-Methods", allowedMethods.join(", "));
    req.headers.set(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
  }

  if (method === "OPTIONS") {
    req.headers.set("Access-Control-Allow-Methods", allowedMethods.join(", "));
    req.headers.set(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
  }
}
