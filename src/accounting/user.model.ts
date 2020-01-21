export function User(
  login = 'Geralt',
  password = 'I enjoy killing beasts',
  balance = 10000,
) {
  this.login = login;
  this.password = password;
  this.balance = balance;
  this.transactions = [];
}
