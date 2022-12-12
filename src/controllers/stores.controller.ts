import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { StoresDto } from '../dto/stores-dto.dto';
import { StoresService } from '../services/stores.service';


@Controller('Stores')
export class StoresController {
    constructor(private readonly storesService: StoresService) { }

    @Post()
    async create(@Body() storesDto: StoresDto) {
        const res = this.storesService.create(storesDto);
        return res;
    }

    @Get()
    async findAll() {
        return this.storesService.findAll();
    }

    @Post('/:id')
    update(@Param('id') id: string, @Body() storesDto: StoresDto) {
        return this.storesService.update(id, storesDto);
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.storesService.delete(id);
    }
}