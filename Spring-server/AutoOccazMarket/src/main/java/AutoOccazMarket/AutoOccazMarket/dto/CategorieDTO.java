package com.enterprise.stockmanagement.Categorie.DTO;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.enterprise.stockmanagement.Categorie.Entities.Categorie;

@Component
public class CategorieDTO {
    @Autowired
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
