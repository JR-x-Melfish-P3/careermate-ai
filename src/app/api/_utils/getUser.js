import jwt from "jsonwebtoken";
import users from "@/app/api/_db/users";
import { cookies } from "next/headers";

const getUser = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return;
  }

  try {
    const requestUser = jwt.verify(token, process.env.JWT_SECRET);

    if (!requestUser) {
      return;
    }

    const user = users.findOne({ id: requestUser.id });

    if (!user) {
      return;
    }

    return user;
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return;
    }

    throw error;
  }
};

export default getUser;
