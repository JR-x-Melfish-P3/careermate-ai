import bcrypt from "bcrypt";
import users from "@/app/api/_db/users";
import withToken from "@/app/api/_middlewares/withToken";
import getUser from "@/app/api/_utils/getUser";
import Boom from "@hapi/boom";
import { NextResponse } from "next/server";
import z from "zod";

const schema = z.object({
  currentPassword: z.string().nonempty(),
  newPassword: z.string().min(6),
});

export const PUT = withToken(async (request) => {
  const json = await request.json();
  const result = schema.safeParse(json);

  if (!result.success) {
    const { statusCode, payload } = Boom.badData(result.error.errors).output;
    return NextResponse.json({ payload }, { status: statusCode });
  }

  const { currentPassword, newPassword } = result.data;

  const user = await getUser();

  if (!user) {
    const { statusCode, payload } = Boom.badImplementation().output;
    return NextResponse.json({ payload }, { status: statusCode });
  }

  const isCorrectPassword = await bcrypt.compare(
    currentPassword,
    user.password,
  );

  console.log(isCorrectPassword);

  if (!isCorrectPassword) {
    const { statusCode, payload } = Boom.unauthorized().output;
    return NextResponse.json({ payload }, { status: statusCode });
  }

  const hash = await bcrypt.hash(newPassword, 10);

  user.password = hash;
  users.update(user);

  return NextResponse.json({ message: "Ok" });
});
