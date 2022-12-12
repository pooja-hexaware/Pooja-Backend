import { CouponDto } from "../dto/coupon-dto.dto";
import { CouponService } from "../services/coupon.service";
export declare class CouponController {
    private readonly couponService;
    constructor(couponService: CouponService);
    create(menuDto: CouponDto): Promise<import("../schemas/coupon.schema").Coupon>;
    findAll(): Promise<import("../schemas/coupon.schema").Coupon[]>;
    getDiscount(cartItems: any): number;
    update(id: string, menuDto: CouponDto): Promise<import("../schemas/coupon.schema").Coupon>;
    delete(id: string): Promise<import("../schemas/coupon.schema").Coupon>;
}
