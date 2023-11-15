import {Places} from "@/src/lib/objects/Places";


export function PlaceNameById(id) {
    const place = Places.find(p => Number(p.id) === Number(id));
    return place ? place.name : null;
}
