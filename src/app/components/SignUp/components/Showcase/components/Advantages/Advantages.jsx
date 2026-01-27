import Card from "./components/Card";
import Coach from "./components/Coach";
import PoweredByAI from "./components/PoweredByAI";

const Advantages = () => (
  <div className="absolute bottom-0 left-0 right-0 flex *:flex-1 gap-4 ">
    <Card>
      <Coach />
    </Card>
    <Card>
      <PoweredByAI />
    </Card>
  </div>
);

export default Advantages;
