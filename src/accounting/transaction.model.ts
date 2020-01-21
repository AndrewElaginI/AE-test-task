export function Transaction(type, amount) {
  this.id = Math.random();
  this.type = type;
  this.amount = amount;
  this.effectiveDate = Date.now();
}
