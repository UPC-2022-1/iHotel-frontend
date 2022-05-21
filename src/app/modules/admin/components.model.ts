export interface Customers{
    id: number;
    name: string;
}
export interface Consumptions{
    id: number;
    customer: number;
    service: Array<number>;
}
export interface Services{
    id: number;
    name: string;
}
export interface Hotel {
    id: number;
    name: string;
    description: string;
    address: string;
}
export interface Employee {
    id: number;
    name: string;
    identificationCard: string;
    phoneNumber: string;
    position: string;
}
export interface Room {
    id: number;
    hotelId: number;
    roomTypeId: number;
    roomNumber: number;
    floor: number;
}

