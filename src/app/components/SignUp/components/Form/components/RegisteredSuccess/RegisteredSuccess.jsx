import Header from "@/app/components/Header";
import Modal from "../Modal";
import { CircleCheckBig } from "lucide-react";

const RegisteredSuccess = () => (
  <Modal>
    <Header />
    <div className="space-y-4 font-bold">
      <div>
        <CircleCheckBig className="text-sky-600 mx-auto" size={40} />
      </div>
      <div>🎉 Registration successful! Logging you in...</div>
    </div>
  </Modal>
);

export default RegisteredSuccess;
