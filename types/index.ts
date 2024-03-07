import { MouseEventHandler } from "react"
import CardCar from '../components/CardCar';

export interface CustomButtonProps {
    title:string
    containerStyles?:string
    handleClick?: MouseEventHandler<HTMLButtonElement>
    btnType?: 'button' | 'submit' 
    textStyles?:string
    rightIcon?:string
    isDisabled?:boolean
}

export interface SearchManufacturerProps {
    manufacturer:string
    setManufacturer?:(manufacturers:string)=>void 
}

export interface CarProps {
    city_mpg:number;
    class:string;
    combination_mpg:number;
    cylinders:number;
    displacement:number;
    drive:string;
    fuel_type:string;
    highway_mpg:number;
    make:string;
    model:string;
    transmission:string;
    year:number;
}

export interface CarDetailsProps {
    isOpen:boolean
    closeModal:()=>void ;
    car: CarProps
}

export interface SearchButtonProps {
    otherClasses:string
}
export interface FilterProps {
    manufacturer: string
    year: number
    fuel: string
    limit: number
    model: string
}