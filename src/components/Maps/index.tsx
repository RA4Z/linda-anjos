import { useEffect, useRef, useState } from 'react';
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';

export default function Maps() {
    const mapContainer = useRef<HTMLDivElement>(null); // Defina o tipo da ref como HTMLDivElement
    const [map, setMap] = useState<Map | null>(null); // Defina o tipo do estado map como Map | null

    useEffect(() => {
        if (!map && mapContainer.current) {
            const newMap = new Map({
                target: mapContainer.current,
                layers: [
                    new TileLayer({
                        source: new OSM(),
                    }),
                ],
                view: new View({
                    projection: 'EPSG:4326',
                    center: [-49.0838538, -26.4044748], // Converta as coordenadas para usar longitude e latitude
                    zoom: 18, // Defina o nível de zoom
                }),
            });
            setMap(newMap);
        }
    }, [map]);

    return (
        <div ref={mapContainer} className='map' style={{ width: '100%', height: '100%' }} />
    )
}