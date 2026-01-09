export default function TravelTree({ placesId, id }) {
  const place = placesId[id];
  const childIds = place.childIds;
  return (
    <>
      <li>
        {place.title}
        <ol className="pl-4 list-decimal list-inside">
          {childIds.length > 0 &&
            childIds.map((id) => (
              <TravelTree key={id} id={id} placesId={placesId} />
            ))}
        </ol>
      </li>
    </>
  );
}
