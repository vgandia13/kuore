import { BussinessHours } from "./BussinessHours";

export interface BussinessHoursGet {
    data: {
        businessHours: BussinessHours[];
    }
    meta: {
        total: number;
        perPage: number;
        currentPage: number;
        lastPage: number;
    }
}