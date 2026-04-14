import jwt from "jsonwebtoken";
import getUser from "@/app/api/_utils/getUser";
import { cookies } from "next/headers";

const withToken = (handler) => async (request) => {
  const user = await getUser();

  if (user) {
    const cookieStore = await cookies();

    const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "5m" });
    cookieStore.set("token", token, {
      httpOnly: true,
      maxAge: 5 * 60,
    });
  }

  return handler(request);
};

export default withToken;
