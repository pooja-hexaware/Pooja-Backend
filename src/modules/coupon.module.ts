import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CouponRepo } from 'src/repository/coupon.repo';
import { CouponService } from 'src/services/coupon.service';
import { Coupon, CouponSchema } from 'src/schemas/coupon.schema';
import { CouponController } from 'src/controllers/coupon.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Coupon.name, schema: CouponSchema }])
    ],
    controllers: [CouponController],
    providers: [CouponService, CouponRepo],
    exports: [CouponService, CouponRepo]
  })
  export class CouponModule { }