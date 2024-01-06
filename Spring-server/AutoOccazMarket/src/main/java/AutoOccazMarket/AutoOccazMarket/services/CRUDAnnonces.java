package AutoOccazMarket.AutoOccazMarket.services;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import AutoOccazMarket.AutoOccazMarket.entities.Annonces;
import AutoOccazMarket.AutoOccazMarket.repositories.AnnoncesRepository;

@Service
public class CRUDAnnonces {
    
    @Autowired
    AnnoncesRepository annoncesRepository ;

    public List<Annonces> getAnnoncesList() 
    {
        return annoncesRepository.findAll();
    }

    public void deleteAnnoncesByID(Integer id)
    {
        annoncesRepository.deleteById(id);

    }

    public Annonces postAnnonces(Annonces annonces)
    {
        return annoncesRepository.save(annonces) ;
    }

    public Annonces getAnnoncesByID (Integer id)
    {
        try 
        {
            return annoncesRepository.findById(id).get();
        } 
        catch (java.util.NoSuchElementException e) 
        {
            return null ;
        }
    }

    public void updateAnnonces(Integer id , Annonces annonces)
    {
        Annonces annoncesToUpdate = getAnnoncesByID(id) ;

        if(annoncesToUpdate == null) return;


        if (annonces.getEtatGeneral()!=null) {
            annoncesToUpdate.setEtatGeneral(annonces.getEtatGeneral());                    
        }

        if (annonces.getEtatValidation()!=null) {
            annoncesToUpdate.setEtatValidation(annonces.getEtatValidation());                    
        }
        if (annonces.getLocalisation()!=null) {
            annoncesToUpdate.setLocalisation(annonces.getLocalisation());                    
        }
        if (annonces.getModeles()!=null) {
            annoncesToUpdate.setModeles(annonces.getModeles());                    
        }
        if (annonces.getUtilisateur()!=null) {
            annoncesToUpdate.setUtilisateur(annonces.getUtilisateur());                    
        }


        postAnnonces(annoncesToUpdate) ;
    }


    
}