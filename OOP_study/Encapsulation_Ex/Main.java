public class Main {
    public static void main(String args[]) {
        BankAccount bAccount1 = new BankAccount("Amisha", 25000.0);

        bAccount1.Withdraw(10000.0);
        bAccount1.Deposit(15000.0);

        System.out.println("Account Balance " + bAccount1.getBalance());
    }
}
