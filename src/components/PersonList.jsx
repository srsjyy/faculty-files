import React from "react";
import { useNavigate } from "react-router-dom";

function PersonList({ data }) {
  const navigate = useNavigate();

  const handlePersonClick = (person) => {
    if (!person.isCS) return;
    const id = `${person.last_name}${person.first_name}`;
    navigate(`/person/${id}`, { state: { person } });
  };
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-12">
      {data.map((person, index) => (
        <div
          key={index}
          onClick={() => handlePersonClick(person)}
          className="card bg-amber-50 border border-gray-200 rounded-lg shadow hover:scale-105 cursor-pointer transition ease-in-out delay-50"
        >
          <div className="relative w-full" style={{ paddingBottom: "125%" }}>
            <picture className="absolute inset-0 w-full h-full rounded-lg overflow-hidden">
              {person.optimizedImages?.webp && (
                <source
                  srcSet={`${person.optimizedImages.webp.small} 480w, ${person.optimizedImages.webp.medium} 800w, ${person.optimizedImages.webp.large} 1200w`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
                  type="image/webp"
                />
              )}

              {person.optimizedImages?.jpeg && (
                <source
                  srcSet={`${person.optimizedImages.jpeg.small} 480w, ${person.optimizedImages.jpeg.medium} 800w, ${person.optimizedImages.jpeg.large} 1200w`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
                  type="image/jpeg"
                />
              )}

              <img
                src={person.optimizedImages?.jpeg?.medium || person.image}
                alt={person.name}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </picture>
          </div>

          <div className="flex flex-col items-start p-4 font-funnel">
            <h3 className="font-semibold text-lg text-gray-800">
              {person.name}
            </h3>
            <p className="bg-red-900 text-white px-3 py-1 rounded mt-2 text-sm">
              {person.designation}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default React.memo(PersonList); // Keep this for performance
