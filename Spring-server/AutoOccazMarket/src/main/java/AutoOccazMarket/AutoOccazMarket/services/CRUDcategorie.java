package AutoOccazMarket.AutoOccazMarket.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import AutoOccazMarket.AutoOccazMarket.entities.Categorie;
import AutoOccazMarket.AutoOccazMarket.repositories.CategorieRepository;


@Service
public class CRUDcategorie {

    @Autowired
    CategorieRepository categorieRepository;

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

}
