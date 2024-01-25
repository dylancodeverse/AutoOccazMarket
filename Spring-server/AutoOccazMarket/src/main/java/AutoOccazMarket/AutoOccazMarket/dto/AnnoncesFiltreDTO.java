package AutoOccazMarket.AutoOccazMarket.dto;

import java.util.List;
import java.util.Map;

import AutoOccazMarket.AutoOccazMarket.entities.Annonces;

public class AnnoncesFiltreDTO {
    Annonces [] listAnnonces ;    

    String[] modeles;

    String[] categories ;
    
    String [] marque ;

    String [] carburant ;

    
    String errors ;

    Map<String, String> tokenInformation;

    public Map<String, String> getTokenInformation() {
        return tokenInformation;
    }

    public void setTokenInformation(Map<String, String> tokenInformation) {
        this.tokenInformation = tokenInformation;
    }

    public void setAnnoncesAsList(List<Annonces> list)
    {
        listAnnonces = list.toArray(new Annonces[list.size()]);
    }

    public Annonces[] getListAnnonces() {
        return listAnnonces;
    }

    public void setListAnnonces(Annonces[] listAnnonces) {
        this.listAnnonces = listAnnonces;
    }


    public String getErrors() {
        return errors;
    }

    public void setErrors(String errors) {
        this.errors = errors;
    }

    public String[] getModeles() {
        return modeles;
    }

    public void setModeles(String[] modeles) {
        this.modeles = modeles;
    }

    public String[] getCategories() {
        return categories;
    }

    public void setCategories(String[] categories) {
        this.categories = categories;
    }

    public String[] getMarque() {
        return marque;
    }

    public void setMarque(String[] marque) {
        this.marque = marque;
    }

    public String[] getCarburant() {
        return carburant;
    }

    public void setCarburant(String[] carburant) {
        this.carburant = carburant;
    }
}
