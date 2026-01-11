export default function TravelTree({ placesId, id, onClick, parentId }) {
  const place = placesId[id];
  const childIds = place.childIds;
  return (
    <>
      <li>
        {place.title}
        <button
          className="text-red-500 border-2 border-red-500 rounded-2xl px-2 mx-3"
          onClick={() => onClick(id, parentId)}
        >
          Delete
        </button>
        <ol className="pl-4 list-decimal list-inside">
          {childIds.length > 0 &&
            childIds.map((id) => (
              <TravelTree
                key={id}
                id={id}
                parentId={parentId}
                placesId={placesId}
                onClick={onClick}
              />
            ))}
        </ol>
      </li>
    </>
  );
}
