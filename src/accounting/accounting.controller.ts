import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { AccouningService } from './accounting.service';
import { Transaction } from './transaction.model';
// import { TransactionDto } from './dto/transaction.dto';

@Controller('transaction')
export class AccouningController {
  constructor(private readonly transactionService: AccouningService) {}

  @Get()
  findAll() {
    const geolocations = this.transactionService.findAll();
    return geolocations;
  }

  @Get('/:id')
  findTransaction(@Param('id') id: string) {
    const transaction = this.transactionService.findTransaction(id);
    return transaction;
  }

  @Post()
  createTransaction(@Body() transaction) {
    const newTransaction = this.transactionService.addTransaction(transaction);
    return newTransaction;
  }
}
