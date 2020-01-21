import { Injectable } from '@nestjs/common';
import { Transaction } from './transaction.model';
import { User } from './user.model';

const user = new User();

@Injectable()
export class AccouningService {
  findAll() {
    return user.transactions;
  }

  findTransaction(transactionId) {
    console.log(transactionId);
    const transaction = user.transactions.filter(t => t.id == transactionId);
    return transaction;
  }

  addTransaction(transaction) {
    const { type, amount } = transaction;
    const t = new Transaction(type, amount);
    if (type !== 'debit' && type !== 'credit') {
      return 'Please. choose correct transaction type: debit or credit';
    }
    if (type === 'credit' && user.balance - amount < 0) {
      return 'Unable to process transaction, due to possible negative balance';
    }
    type === 'debit'
      ? (user.balance += Number(amount))
      : (user.balance -= Number(amount));
    user.transactions.push(t);
    return user;
  }
}
