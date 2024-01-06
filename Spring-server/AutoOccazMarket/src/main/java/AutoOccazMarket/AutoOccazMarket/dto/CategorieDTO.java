package AutoOccazMarket.AutoOccazMarket.dto;
import java.util.List;

import org.springframework.stereotype.Component;

import AutoOccazMarket.AutoOccazMarket.entities.Categorie;


@Component
public class CategorieDTO {
    Categorie[] listCategorie;

    Categorie categorie;

    String errors;

    public void setCategorieAsList(List<Categorie> list) {
        listCategorie = list.toArray(new Categorie[list.size()]);
    }

    public Categorie[] getListCategorie() {
        return listCategorie;
    }

    public void setListCategorie(Categorie[] listCategorie) {
        this.listCategorie = listCategorie;
    }

    public Categorie getCategorie() {
        return categorie;
    }

    public void setCategorie(Categorie categorie) {
        this.categorie = categorie;
    }

    public String getErrors() {
        return errors;
    }

    public void setErrors(String errors) {
        this.errors = errors;
    }

}
