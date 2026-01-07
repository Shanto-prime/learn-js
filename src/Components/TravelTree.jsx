export default function TravelTree({ place }) {
  const childPlaces = place.childPlaces;
  return (
    <>
      <li>
        {place.title}
        <ol className="pl-4 list-decimal list-inside">
          {childPlaces.length > 0 &&
            childPlaces.map((childPlace) => (
              <TravelTree key={childPlace.id} place={childPlace} />
            ))}
        </ol>
      </li>
    </>
  );
}
