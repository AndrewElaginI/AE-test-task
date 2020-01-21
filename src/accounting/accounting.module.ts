import { Module } from '@nestjs/common';
import { AccouningService } from './accounting.service';
import { AccouningController } from './accounting.controller';

@Module({
  providers: [AccouningService],
  controllers: [AccouningController],
})
export class AccountingModule {}
