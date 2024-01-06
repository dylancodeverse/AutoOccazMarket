package com.enterprise.stockmanagement.Categorie.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.enterprise.stockmanagement.Categorie.Entities.Categorie;
import com.enterprise.stockmanagement.Categorie.Repositories.CategorieRepository;
import com.enterprise.stockmanagement.Categorie.Services.Exception.Categorie;

import AutoOccazMarket.AutoOccazMarket.entities.CategorieNameNotFoundException;

@Service
public class CRUDcategorie {

    @Autowired
    CategorieRepository storcategorieRepository;

    public List<Categorie> getCategorieList() {
        return categorieRepository.findAll();
    }

    public void deleteCategorieByID(Integer id) {
        categorieRepository.deleteById(id);

    }

    public Categorie postCategorie(Categorie categorie) {
        return categorieRepository.save(categorie);
    }

    public Categorie getCategorieByID(Integer id) {
        try {
            return categorieRepository.findById(id).get();
        } catch (java.util.NoSuchElementException e) {
            return null;
        }
    }

    public void updateCategorie(Integer id, Categorie categorie) {
        Categorie categorieToUpdate = getCategorieByID(id);

        if (categorieToUpdate == null)
            return;

        if (categorie.getCategorie() != null) {
            categorieToUpdate.setCategorie(categorie.getCategorie());
        }

        postCategorie(categorieToUpdate);
    }

    public Categorie getByName(String categorieName) throws CategorieNameNotFoundException {
        try {
            return categorieRepository.findByCategorieName(categorieName).get();
        } catch (Exception e) {
            throw new CategorieNameNotFoundException("Could not find the categorie " + categorieName);
        }
    }
}
