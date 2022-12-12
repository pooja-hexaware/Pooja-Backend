"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoresDto = void 0;
const openapi = require("@nestjs/swagger");
class StoresDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { Store_id: { required: true, type: () => Object }, Store_name: { required: true, type: () => String } };
    }
}
exports.StoresDto = StoresDto;
//# sourceMappingURL=stores-dto.dto.js.map