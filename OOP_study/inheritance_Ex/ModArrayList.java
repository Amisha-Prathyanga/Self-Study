package OOP_study.inheritance_Ex;

import java.util.ArrayList;

//not fully completed
public class ModArrayList<D> extends ArrayList<D> {
    public D getUsingMod(int index) {
        int validIndex = Math.abs(index) % this.size();
        return this.get(validIndex);
    }
}
