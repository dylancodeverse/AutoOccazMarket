package AutoOccazMarket.AutoOccazMarket.dto;

import java.util.List;

import org.springframework.stereotype.Component;

import AutoOccazMarket.AutoOccazMarket.entities.Modeles;



@Component
public class ModelesDTO 
{
    Modeles [] listModeles ;    

    Modeles modeles ;

    String errors ;

    public void setModelesAsList(List<Modeles> list)
    {
        listModeles = list.toArray(new Modeles[list.size()]);
    }

    public Modeles[] getListModeles() {
        return listModeles;
    }

    public void setListModeles(Modeles[] listModeles) {
        this.listModeles = listModeles;
    }

    public Modeles getModeles() {
        return modeles;
    }

    public void setModeles(Modeles modeles) {
        this.modeles = modeles;
    }

    public String getErrors() {
        return errors;
    }

    public void setErrors(String errors) {
        this.errors = errors;
    }

}

