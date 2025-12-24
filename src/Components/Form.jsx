export default function Form({ status = "Empty" }) {
  if (status === "Success") {
    return <h1>Thats Right!</h1>;
  }
  return (
    <>
      <form id="form">
        <textarea
          name="userInput"
          id="input1"
          rows="1"
          disabled={status === "Submitting"}
          placeholder="?"
          className=" px-5"
        ></textarea>
        <br />
        <button
          type="submit"
          disabled={status === "Submitting" || status === "Empty"}
        >
          Submit
        </button>
        {status === "Submitting" && <p>Loading...</p>}

        {status === "Error" && (
          <p className="error text-red-500">There Was An Error</p>
        )}
      </form>
    </>
  );
}
