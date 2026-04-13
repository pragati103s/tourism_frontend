import { useEffect, useRef } from "react";
import * as Cesium from "cesium";

export default function CesiumMap({ places, activePlace }) {
  const mapRef = useRef();
  const viewerRef = useRef(null);

  // 🔹 INIT VIEWER (ONLY ONCE)
  useEffect(() => {
    if (!mapRef.current || viewerRef.current) return;

    viewerRef.current = new Cesium.Viewer(mapRef.current, {
      terrain: Cesium.Terrain.fromWorldTerrain(),
      animation: false,
      timeline: false,
      infoBox: false,
      selectionIndicator: false,
    });
  }, []);

  // 🔹 UPDATE MARKERS + ROUTE
  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer || !places) return;

    // clear old entities
    viewer.entities.removeAll();

    // 👉 ADD MARKERS
    places.forEach((place, index) => {
      viewer.entities.add({
        name: place.name,
        position: Cesium.Cartesian3.fromDegrees(
          place.lng,
          place.lat
        ),
        point: {
          pixelSize: 12,
          color:
            index === activePlace
              ? Cesium.Color.RED   // 🔥 active highlight
              : Cesium.Color.CYAN,
               heightReference: Cesium.HeightReference.CLAMP_TO_GROUND, // 🔥 FIX
        },
      });
    });

    // 👉 ROUTE LINE
    const positions = places.flatMap((p) => [p.lng, p.lat]);

    viewer.entities.add({
      polyline: {
        positions: Cesium.Cartesian3.fromDegreesArray(positions),
        clampToGround: true, // 🔥 FIX
        width: 4,
        material: Cesium.Color.YELLOW,
      },
    });

    // 👉 AUTO FIT ALL POINTS
    const cartesianPoints = places.map((p) =>
      Cesium.Cartesian3.fromDegrees(p.lng, p.lat)
    );

    const boundingSphere =
      Cesium.BoundingSphere.fromPoints(cartesianPoints);

    viewer.camera.flyToBoundingSphere(boundingSphere, {
      duration: 2,
    });

  }, [places]);

  // 🔹 CLICK PLACE → ZOOM
  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer || !places) return;

    const place = places[activePlace];
    if (!place) return;

    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(
        place.lng,
        place.lat,
        30000
      ),
      duration: 1.5,
    });

  }, [activePlace]);

  return <div ref={mapRef} className="w-full h-full" />;
}