package AutoOccazMarket.AutoOccazMarket.services;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import AutoOccazMarket.AutoOccazMarket.entities.Annonces;
import AutoOccazMarket.AutoOccazMarket.entities.ValidationAnnoncesHistorique;
import AutoOccazMarket.AutoOccazMarket.repositories.AnnoncesRepository;
import AutoOccazMarket.AutoOccazMarket.repositories.ValidationAnnoncesHistoriqueRepository;
import jakarta.transaction.Transactional;

@Service
public class CRUDAnnonces {
    
    @Autowired
    AnnoncesRepository annoncesRepository ;

    @Autowired
    ValidationAnnoncesHistoriqueRepository validationAnnoncesHistoriqueRepository ;


    public List<Annonces> getAnnoncesNonPostees(){
        return annoncesRepository.findByEtatValidation(1);
    }

    public List<Annonces> getAnnoncesList() 
    {
        return annoncesRepository.findAll();
    }

    public void deleteAnnoncesByID(Integer id)
    {
        annoncesRepository.deleteById(id);

    }

    /**
     * Insertion annonces
     * =>transactionel miaraka @ historisation
     * @param annonces
     * @return
     */
    @Transactional
    public Annonces postAnnonces(Annonces annonces)
    {
        annonces.setEtatValidation(1);
        Annonces a= annoncesRepository.save(annonces) ;
        ValidationAnnoncesHistorique v = new ValidationAnnoncesHistorique();
        v.setAnnonces(annonces);
        v.setDescription("premiere insertion");
        v.setEtatValidation(1);
        v.setValidateur(annonces.getUtilisateur());

        validationAnnoncesHistoriqueRepository.save(v) ;
        return a ;
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
        if (annonces.getPrix()!=null) {
            annoncesToUpdate.setPrix(annonces.getPrix());
        }
        if (annonces.getDescription()!=null) {
            annoncesToUpdate.setDescription(annonces.getDescription());
        }


        postAnnonces(annoncesToUpdate) ;
    }


    
}