import { MouseEventHandler } from "react";

export interface customButtonProps {
    title:string;
    containerStyles?:string;
    handleClick:MouseEventHandler<HTMLButtonElement>;
    btntype?:"button" | "submit";
    textStyles?:string,
    rightIcon?:string,
    isdisabled:boolean
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

export interface FilterProps{
  manufacturer:string;
  year:number;
  fuel:string;
  limit:number;
  model:string;
}