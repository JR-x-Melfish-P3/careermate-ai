import withToken from "@/app/api/_middlewares/withToken";
import getUser from "@/app/api/_utils/getUser";
import Boom from "@hapi/boom";
import { NextResponse } from "next/server";

export const GET = withToken(async () => {
  const user = await getUser();

  if (!user) {
    const { statusCode, payload } = Boom.unauthorized().output;
    return NextResponse.json({ payload }, { status: statusCode });
  }

  return NextResponse.json({
    id: user.id,
    email: user.email,
    fullName: user.fullName,
    displayName: user.displayName,
    goal: user.goal,
  });
});
