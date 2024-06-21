import { MouseEventHandler } from "react";

export interface customButtonProps {
    title:string;
    containerStyles?:string;
    handleClick:MouseEventHandler<HTMLButtonElement>;
    btntype?:"button" | "submit";
}
export interface SearchManufacturerProps{
    manufacturer:string;
    setmanufacturer:(manufacturer:string)=>void;
}
export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders:number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}