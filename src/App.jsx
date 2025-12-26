import "./App.css";
import Form from "./Components/Form";
export default function App() {
  //   const statuses = ["Empty", "Submitting", "Success", "Error", "Typing"];
  return (
    <div className="text-center grid grid-cols-3 justify-center m-10">
      <div className="m-2 flex justify-center">
        <h2>20+10-5-4-3-2-1</h2>
        <p>=</p>
        <Form />
      </div>
    </div>
  );
}
