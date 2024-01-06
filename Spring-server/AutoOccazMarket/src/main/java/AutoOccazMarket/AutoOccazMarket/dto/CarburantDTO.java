package AutoOccazMarket.AutoOccazMarket.dto;

import java.util.List;

import org.springframework.stereotype.Component;

import AutoOccazMarket.AutoOccazMarket.entities.Carburant;

@Component

public class CarburantDTO 
{
    Carburant [] listCarburant ;    

    Carburant carburant ;

    String errors ;

    public void setCarburantAsList(List<Carburant> list)
    {
        listCarburant = list.toArray(new Carburant[list.size()]);
    }

    public Carburant[] getListCarburant() {
        return listCarburant;
    }

    public void setListCarburant(Carburant[] listCarburant) {
        this.listCarburant = listCarburant;
    }

    public Carburant getCarburant() {
        return carburant;
    }

    public void setCarburant(Carburant carburant) {
        this.carburant = carburant;
    }

    public String getErrors() {
        return errors;
    }

    public void setErrors(String errors) {
        this.errors = errors;
    }

}
