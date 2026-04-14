import { NextResponse } from "next/server";
import Boom from "@hapi/boom";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import users from "@/app/api/_db/users";

export async function POST(request) {
  const { email, password, fullName } = await request.json();

  if (!email || !password || !fullName) {
    const { statusCode, payload } = Boom.badData().output;
    return NextResponse.json({ payload }, { status: statusCode });
  }

  const existing = users.findOne({ email });

  if (existing) {
    const { statusCode, payload } = Boom.conflict().output;
    return NextResponse.json({ payload }, { status: statusCode });
  }

  const hash = await bcrypt.hash(password, 10);
  const user = users.insert({ email, password: hash, fullName });

  const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "5m" });

  const response = new NextResponse(null, { status: 200 });
  response.cookies.set("token", token, { httpOnly: true, maxAge: 5 * 60 });

  return response;
}
