"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuDto = void 0;
const openapi = require("@nestjs/swagger");
class MenuDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { Menu_name: { required: true, type: () => String }, Menu_Description: { required: true, type: () => String }, Menu_price: { required: true, type: () => Object } };
    }
}
exports.MenuDto = MenuDto;
//# sourceMappingURL=menu-dto.dto.js.map