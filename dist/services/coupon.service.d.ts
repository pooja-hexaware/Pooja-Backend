import { CouponRepo } from "src/repository/coupon.repo";
import { Coupon } from "src/schemas/coupon.schema";
export declare class CouponService {
    private readonly couponRepo;
    getDiscountFromCode(cartItems: any): number;
    constructor(couponRepo: CouponRepo);
    findAll(): Promise<Coupon[]>;
    create(data: any): Promise<Coupon>;
    update(couponId: any, data: any): Promise<Coupon>;
    delete(couponId: any): Promise<Coupon>;
}
