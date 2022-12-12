"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDto = void 0;
const openapi = require("@nestjs/swagger");
class OrderDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { Order_id: { required: true, type: () => Object }, total_amount: { required: true, type: () => Object }, date: { required: true, type: () => Date }, status: { required: true, type: () => String }, name: { required: true, type: () => String }, postalCode: { required: true, type: () => String }, city: { required: true, type: () => String }, phone: { required: true, type: () => String } };
    }
}
exports.OrderDto = OrderDto;
//# sourceMappingURL=order-dto.dto.js.map