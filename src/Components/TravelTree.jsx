export default function TravelTree({ placesId, id, onDelete, parentId }) {
  const place = placesId[id];
  const childIds = place.childIds;
  return (
    <>
      <li>
        {place.title}
        <button
          className="text-red-500 border-2 border-red-500 rounded-2xl px-2 mx-3"
          onClick={() => onDelete(id, parentId)}
        >
          Delete
        </button>
        <ol className="pl-4 list-decimal list-inside">
          {childIds.length > 0 &&
            childIds.map((childId) => (
              <TravelTree
                key={childId}
                id={childId}
                parentId={id}
                placesId={placesId}
                onDelete={onDelete}
              />
            ))}
        </ol>
      </li>
    </>
  );
}
