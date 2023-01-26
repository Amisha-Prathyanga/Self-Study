public class BankAccount{
    private String owner;
    private double balance;

    

    public BankAccount(String owner, double balance) {
        this.owner = owner;
        this.balance = balance;
    }
    public String getOwner() {
        return owner;
    }
    public void setOwner(String owner) {
        this.owner = owner;
    }
    public double getBalance() {
        return balance;
    }
    public void setBalance(double balance) {
        this.balance = balance;
    }
    
    public double Withdraw(double wAmount){
        if(wAmount<=this.balance){
            this.balance = this.balance - wAmount;
            return wAmount;
        }
        return 0;
    };

    public double Deposit(double dAmount){
        if(dAmount>0){
            this.balance = this.balance + dAmount;
            return dAmount;
        }
        return 0;
    }
}




