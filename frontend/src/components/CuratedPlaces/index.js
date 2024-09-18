import React from 'react';

const CuratedPlaces = ({ 
  apiKey, 
  center = { lat: 40.7128, lng: -74.0060 }, // Default to New York City
  zoom = 12,
  places = [],
  width = '100%',
  height = '400px'
}) => {
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${center.lat},${center.lng}&zoom=${zoom}`;

  return (
    <div className="curated-places">
      <iframe
        width={width}
        height={height}
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src={mapUrl}
      ></iframe>
      {places.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Curated Places:</h3>
          <ul className="list-disc pl-5">
            {places.map((place, index) => (
              <li key={index} className="mb-1">
                <span className="font-medium">{place.name}</span>
                {place.description && (
                  <span className="text-gray-600 ml-2">- {place.description}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CuratedPlaces;