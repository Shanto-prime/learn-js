export default function Panel({ title, children, isActive, onActiveHandler }) {
    // const handleShow = () => setIsShow(!isShow);
    return (
        <>
            <div className="p-2 m-2 border-amber-500 border-2">
                <h3>{title}</h3>
                {isActive ? (
                    <p>{children}</p>
                ) : (
                    <button
                        onClick={onActiveHandler}
                        className="text-red-500 border-2 border-red-500 rounded-2xl px-2 mx-3"
                    >
                        Show
                    </button>
                )}
            </div>
        </>
    );
}
