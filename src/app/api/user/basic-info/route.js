import { NextResponse } from "next/server";
import withToken from "@/app/api/_middlewares/withToken";
import z from "zod";
import getUser from "@/app/api/_utils/getUser";
import users from "@/app/api/_db/users";
import Boom from "@hapi/boom";

const schema = z.object({
  fullName: z.string().nonempty(),
  displayName: z.string().optional(),
});

export const PATCH = withToken(async (request) => {
  const json = await request.json();
  const result = schema.safeParse(json);

  if (!result.success) {
    const { statusCode, payload } = Boom.badData(result.error.errors).output;
    return NextResponse.json({ payload }, { status: statusCode });
  }

  const { fullName, displayName } = result.data;

  const user = await getUser();

  if (!user) {
    const { statusCode, payload } = Boom.badImplementation().output;
    return NextResponse.json({ payload }, { status: statusCode });
  }

  user.fullName = fullName;
  user.displayName = displayName;

  users.update(user);

  return NextResponse.json({ message: "Ok" });
});
