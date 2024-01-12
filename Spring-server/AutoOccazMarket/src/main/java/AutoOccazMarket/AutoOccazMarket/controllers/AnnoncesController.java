package AutoOccazMarket.AutoOccazMarket.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import AutoOccazMarket.AutoOccazMarket.dto.AnnoncesDTO;
import AutoOccazMarket.AutoOccazMarket.entities.Annonces;
import AutoOccazMarket.AutoOccazMarket.services.CRUDAnnonces;


@RestController
public class AnnoncesController 
{

    @Autowired
    private CRUDAnnonces crudAnnonces ;

    @Autowired
    private AnnoncesDTO annoncesDTO ;

    @GetMapping(path = "/annoncesNonPostees")
    public AnnoncesDTO getAnnoncesNonPostees()
    {
        List<Annonces> annonces = crudAnnonces.getAnnoncesNonPostees() ;
        annoncesDTO.setAnnoncesAsList(annonces);
        return annoncesDTO ;
    }    


    @GetMapping(path = "/annonces")
    public AnnoncesDTO getAnnoncess()
    {
        List<Annonces> annonces = crudAnnonces.getAnnoncesList() ;
        annoncesDTO.setAnnoncesAsList(annonces);
        return annoncesDTO ;
    }

    @GetMapping(path = "/annonces/{id}")
    public AnnoncesDTO getAnnoncessById(@PathVariable("id") final Integer id)
    {
        Annonces annonces = crudAnnonces.getAnnoncesByID(Integer.valueOf(id)) ;
        annoncesDTO.setAnnonces(annonces) ;

        return annoncesDTO ;
    }

    @PostMapping(path = "/annonces")
    public AnnoncesDTO saveAnnonces(@RequestBody AnnoncesDTO annoncesDTO)
    {
        try {
            crudAnnonces.postAnnonces(annoncesDTO.getAnnonces());
            
        } catch (Exception e) {
            annoncesDTO.setErrors(e.getMessage());
        }

        return annoncesDTO;

    }
        

    @PutMapping(path ="/annonces/{id}")
    public AnnoncesDTO updateAnnonces(@PathVariable("id") final Integer id , @RequestBody AnnoncesDTO annoncesDTO)
    {
        crudAnnonces.updateAnnonces(id, annoncesDTO.getAnnonces());

        return annoncesDTO;
    }

    @DeleteMapping(path = "/annonces/{id}")
    public void deleteAnnonces(@PathVariable("id") final Integer id)
    {
        crudAnnonces.deleteAnnoncesByID(id);
    }    
}
