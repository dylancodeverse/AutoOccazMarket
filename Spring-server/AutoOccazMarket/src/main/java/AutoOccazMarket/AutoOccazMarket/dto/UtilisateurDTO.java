package AutoOccazMarket.AutoOccazMarket.dto;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import AutoOccazMarket.AutoOccazMarket.entities.Utilisateur;

@Component
public class UtilisateurDTO {
    @Autowired
    Utilisateur[] listUtilisateur;

    Utilisateur utilisateur;

    String errors;

    public void setUtilisateurAsList(List<Utilisateur> list) {
        listUtilisateur = list.toArray(new Utilisateur[list.size()]);
    }

    public Utilisateur[] getListUtilisateur() {
        return listUtilisateur;
    }

    public void setListUtilisateur(Utilisateur[] listUtilisateur) {
        this.listUtilisateur = listUtilisateur;
    }

    public Utilisateur getUtilisateur() {
        return utilisateur;
    }

    public void setUtilisateur(Utilisateur utilisateur) {
        this.utilisateur = utilisateur;
    }

    public String getErrors() {
        return errors;
    }

    public void setErrors(String errors) {
        this.errors = errors;
    }

}
