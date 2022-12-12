import { Document } from "mongoose";
export declare type CouponDocument = Coupon & Document;
export declare class Coupon {
    Coupon_code: string;
    Coupon_id: Number;
}
export declare const CouponSchema: import("mongoose").Schema<Document<Coupon, any, any>, import("mongoose").Model<Document<Coupon, any, any>, any, any>, undefined, {}>;
