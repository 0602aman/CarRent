import { MouseEventHandler } from "react"

export interface CustomButtonProps{
    title: string;
    containerStyles?: string;
    textStyles?: string;  
    btnType?: "button" | "submit";
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    rightIcon?: string;
    isDisabled?: boolean;
    
    
}

export interface SearchManuFacturerProps{
    manufacturer: string;
    setManuFacturer: (manufacturer: string) => void;
}

export interface CarProps{
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
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
    manufacturer: string;
    model:string;
    year:number;
    fuel:string;
    limit:number;
}

export interface OptionProps{
    value:string;
    title:string;
}

export interface CustomFilterProps{
    title: string;
    options: OptionProps[];
}

export interface ShowMoreProps{
    pageNUmbers: number;
    isNext: boolean;
}