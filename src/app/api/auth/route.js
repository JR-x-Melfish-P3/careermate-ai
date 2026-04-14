import { NextResponse } from "next/server";
import Boom from "@hapi/boom";
import getUser from "@/app/api/_utils/getUser";
import withToken from "@/app/api/_middlewares/withToken";

export const GET = withToken(async () => {
  const user = await getUser();

  if (!user) {
    const { statusCode, payload } = Boom.unauthorized();
    return NextResponse.json(payload, { status: statusCode });
  }

  return NextResponse.json({
    id: user.id,
    email: user.email,
    fullName: user.fullName,
  });
});
