import corsMiddleware from "@/middlewares/cors";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest): Promise<Response> {
  corsMiddleware(req);

  return new Response(JSON.stringify({ message: "Api Started." }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
