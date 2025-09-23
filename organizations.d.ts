interface Organization {
    handle: string;
    municipality: string;
    province: "Alberta" | "British Columbia" | "Ontario" | "Quebec";
    latitude: number;
    longitude: number;
}
export declare const organizations: Organization[];
export {};
