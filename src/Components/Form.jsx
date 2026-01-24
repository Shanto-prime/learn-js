import { useState } from "react";

function submitForm(answer) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (answer.trim() === "15") {
                resolve();
            } else {
                reject(new Error("Wrong answer!"));
            }
        }, 1000);
    });
}

export default function Form() {
    const [formData, setFormData] = useState({
        answer: "",
        error: null,
        status: "idle", // idle, submitting, success, error
    });

    const handleChange = (e) => {
        const { value } = e.target;
        setFormData((prev) => ({
            ...prev,
            answer: value,
            error: null,
            status: "idle",
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.answer.trim()) return;

        setFormData((prev) => ({ ...prev, status: "submitting", error: null }));

        try {
            await submitForm(formData.answer.trim());
            setFormData((prev) => ({ ...prev, status: "success" }));
        } catch (err) {
            setFormData((prev) => ({
                ...prev,
                status: "error",
                error: err.message,
            }));
        }
    };

    const isSubmitting = formData.status === "submitting";
    const isSuccess = formData.status === "success";
    const hasError = formData.status === "error";

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                    <label htmlFor="answer" className="form-label">
                        Your Answer:
                    </label>
                    <textarea
                        id="answer"
                        name="answer"
                        value={formData.answer}
                        onChange={handleChange}
                        rows={1}
                        placeholder="Enter your answer here..."
                        className="form-textarea px-5"
                        disabled={isSubmitting}
                        required
                        aria-describedby={
                            hasError ? "error-message" : undefined
                        }
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
                    disabled={isSubmitting || !formData.answer.trim()}
                >
                    {isSubmitting ? "Submitting..." : "Submit"}
                </button>

                {isSuccess && (
                    <p className="success-message text-green-500 mt-2">
                        That's correct!
                    </p>
                )}

                {isSubmitting && (
                    <p className="loading-message text-blue-500 mt-2">
                        Checking your answer...
                    </p>
                )}

                {hasError && (
                    <p
                        id="error-message"
                        className="error-message text-red-500 mt-2"
                        role="alert"
                    >
                        {formData.error}
                    </p>
                )}
            </form>
            <hr />
        </div>
    );
}
