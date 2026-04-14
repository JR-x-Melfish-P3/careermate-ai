import { NextResponse } from "next/server";
import Boom from "@hapi/boom";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import users from "@/app/api/_db/users";

export async function POST(request) {
  const { email, password } = await request.json();

  if (!email || !password) {
    const { statusCode, payload } = Boom.badData();
    return NextResponse.json(payload, { status: statusCode });
  }

  const user = users.findOne({ email });

  if (!user) {
    const { statusCode, payload } = Boom.notFound();
    return NextResponse.json(payload, { status: statusCode });
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    const { statusCode, payload } = Boom.notFound();
    return NextResponse.json(payload, { status: statusCode });
  }

  const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "5m" });

  const response = new NextResponse(null, { status: 200 });
  response.cookies.set("token", token, { httpOnly: true, maxAge: 5 * 60 });

  return response;
}
