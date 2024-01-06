package AutoOccazMarket.AutoOccazMarket.dto;

import java.util.List;

import org.springframework.stereotype.Component;

import AutoOccazMarket.AutoOccazMarket.entities.Marque;


@Component
public class MarqueDTO 
{
    Marque [] listMarque ;    

    Marque marque ;

    String errors ;

    public void setMarqueAsList(List<Marque> list)
    {
        listMarque = list.toArray(new Marque[list.size()]);
    }

    public Marque[] getListMarque() {
        return listMarque;
    }

    public void setListMarque(Marque[] listMarque) {
        this.listMarque = listMarque;
    }

    public Marque getMarque() {
        return marque;
    }

    public void setMarque(Marque marque) {
        this.marque = marque;
    }

    public String getErrors() {
        return errors;
    }

    public void setErrors(String errors) {
        this.errors = errors;
    }

}
