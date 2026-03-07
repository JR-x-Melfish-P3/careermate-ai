import { CircleAlert } from "lucide-react";
import Modal from "../Modal";
import Button from "../Button";

const ServerError = ({ status }) => (
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
              <Button onClick={() => {}}>Go to Login</Button>
            </div>
          </div>
        ),
      }[status] || <div>Something went wrong, please try again later.</div>}
    </div>
  </Modal>
);

export default ServerError;
