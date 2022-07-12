/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose" />
interface IProduct {
    name: string;
    price: number;
    producer: string;
    avatar: string;
}
declare const Product: import("mongoose").Model<IProduct, {}, {}, {}>;
export { Product };
