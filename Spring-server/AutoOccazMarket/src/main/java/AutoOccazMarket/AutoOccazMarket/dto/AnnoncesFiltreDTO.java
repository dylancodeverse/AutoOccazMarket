package AutoOccazMarket.AutoOccazMarket.dto;

import java.util.List;
import java.util.Map;

import AutoOccazMarket.AutoOccazMarket.entities.Annonces;

public class AnnoncesFiltreDTO {
    Annonces [] listAnnonces ;    

    List<String> modeles;

    List<String> categories ;
    
    List<String> marque ;

    List<String> carburant ;

    
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

    public List<String> getModeles() {
        return modeles;
    }

    public void setModeles(List<String> modeles) {
        this.modeles = modeles;
    }

    public List<String> getCategories() {
        return categories;
    }

    public void setCategories(List<String> categories) {
        this.categories = categories;
    }

    public List<String> getMarque() {
        return marque;
    }

    public void setMarque(List<String> marque) {
        this.marque = marque;
    }

    public List<String> getCarburant() {
        return carburant;
    }

    public void setCarburant(List<String> carburant) {
        this.carburant = carburant;
    }


}
