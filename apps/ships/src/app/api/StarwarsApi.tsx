import React from 'react'
import { Starship } from './entities/Starship';
import { v4 as uuidv4 } from 'uuid';


export default async function StarwarsApi(page: number): Promise<Starship[]> {
    const result = fetch("https://swapi.dev/api/starships/?page=" + page).
        then((response) =>response.json()).
        then((data) => {
            console.log(data);
            const data_parsed: Starship[] = data.results.map((obj: Starship) => ({
                id: uuidv4(),
                name: obj.name,
                passengers: obj.passengers,
                crew: obj.crew,
                MGLT: obj.MGLT,
                cargo_capacity: obj.cargo_capacity,
                consumables: obj.consumables,
                hyperdrive_rating: obj.hyperdrive_rating,
                max_atmosphering_speed: obj.max_atmosphering_speed,
                model: obj.model,
                starship_class: obj.starship_class,
            }));
            return data_parsed;
        });
    return result;
}
