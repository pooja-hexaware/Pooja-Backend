import { Model } from 'mongoose';
import { Coupon, CouponDocument } from 'src/schemas/coupon.schema';
export declare class CouponRepo {
    private readonly couponModel;
    constructor(couponModel: Model<CouponDocument>);
    create(data: any): Promise<Coupon>;
    findAll(): Promise<Coupon[]>;
    update(couponId: any, data: any): Promise<Coupon>;
    delete(couponId: any): Promise<Coupon>;
}
