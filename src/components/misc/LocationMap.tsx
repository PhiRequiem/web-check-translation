import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from 'react-simple-maps';

import MapFeatures from 'assets/data/map-features.json';

interface Props {
  lat: number,
  lon: number,
  label?: string,
};

const MapChart = (location: Props) => {
  const { lat, lon, label } = location;

  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [0, 0, 0],
        center: [lon + 5, lat - 25],
        scale: 200
      }}
    >
      <Geographies
        geography={MapFeatures}
        fill="#86a5d9"
        stroke="#f1f6f1"
        strokeWidth={0.5}
      >
        {({ geographies }: any) =>
          geographies.map((geo: any) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[lon, lat]}
        dx={-80}
        dy={-80}
        connectorProps={{
          stroke: "#804fdc",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" fill="#804fdc" fontSize={25}>
          {label || "Server"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;
