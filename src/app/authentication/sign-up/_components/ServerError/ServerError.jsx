import { CircleAlert } from "lucide-react";
import Modal from "../Modal";
import Button from "../../../../_components/Button";
import { useRouter } from "next/navigation";

const ServerError = ({ status }) => {
  const router = useRouter();

  return (
    <Modal isDialog>
      <div className="p-10 space-y-4 width-[300px] font-bold">
        <div>
          <CircleAlert className="text-orange-500 mx-auto" size={40} />
        </div>
        {{
          409: (
            <div className="space-y-10">
              <div>Email already registered, please log in instead</div>
              <div>
                <Button
                  fullWidth
                  onClick={() => router.push("/authentication/sign-in")}
                >
                  Go to Login
                </Button>
              </div>
            </div>
          ),
        }[status] || <div>Something went wrong, please try again later.</div>}
      </div>
    </Modal>
  );
};

export default ServerError;
