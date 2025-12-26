import { useState } from "react";

function submitForm(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer === "15") {
        resolve();
      } else {
        reject(new Error("Wrong Answer vai"));
      }
    }, 1000);
  });
}

export default function Form() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");

  const handleTyping = (e) => {
    setError(null);
    setAnswer(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting");
    try {
      await submitForm(answer);
      setStatus("Success");
    } catch (err) {
      setStatus("typing");
      setError(err.message);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTyping}
          rows="1"
          placeholder="?"
          className=" px-5"
          disabled={status === "Submitting"}
        ></textarea>
        <br />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
          type="submit"
          disabled={status === "Submitting" || answer === ""}
        >
          Submit
        </button>
        {status === "Success" && <p>Thats Right!</p>}
        {status === "Submitting" && <p>Loading...</p>}
        {error && <p className="error text-red-500">{error}</p>}
        {/* <p className="error text-red-500">There Was An Error</p> */}
      </form>
      <hr />
    </>
  );
}
