"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponDto = void 0;
const openapi = require("@nestjs/swagger");
class CouponDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { coupon_id: { required: true, type: () => Object }, coupon_code: { required: true, type: () => String } };
    }
}
exports.CouponDto = CouponDto;
//# sourceMappingURL=coupon-dto.dto.js.map