package AutoOccazMarket.AutoOccazMarket.controllers;

import java.sql.DriverManager;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import AutoOccazMarket.AutoOccazMarket.dto.AnnoncesCompletDTO;
import AutoOccazMarket.AutoOccazMarket.dto.AnnoncesDTO;
import AutoOccazMarket.AutoOccazMarket.dto.AnnoncesFiltreDTO;
import AutoOccazMarket.AutoOccazMarket.entities.Annonces;
import AutoOccazMarket.AutoOccazMarket.entities.AnnoncesComplet;
import AutoOccazMarket.AutoOccazMarket.services.CRUDAnnonces;
import org.springframework.web.bind.annotation.RequestParam;




@RestController
@CrossOrigin(origins = "${frontend.url}")

public class AnnoncesController 
{

    @Autowired
    private CRUDAnnonces crudAnnonces ;

    @Autowired
    private AnnoncesDTO annoncesDTO ;

    @Value("${spring.datasource.url}")
    private String url ;

    @Value("${spring.datasource.username}")
    private String username ;

    @Value("${spring.datasource.password}")
    private String password ;

    @GetMapping(path = "/annoncesNonPostees")
    public AnnoncesDTO getAnnoncesNonPostees()
    {
        List<Annonces> annonces = crudAnnonces.getAnnoncesNonPostees() ;
        annoncesDTO.setAnnoncesAsList(annonces);
        return annoncesDTO ;
    }    

    @PostMapping("/annoncesfiltre")
    public AnnoncesFiltreDTO filtre(@RequestBody AnnoncesFiltreDTO entity) {
        try {
            List<Annonces> annonces = crudAnnonces.selectWhere(entity);
            entity.setAnnoncesAsList(annonces);
        } catch (Exception e) {
            entity.setErrors(e.getMessage());
        }
        return entity;
    }
    


    @GetMapping(path = "/annonces")
    public AnnoncesDTO getAnnoncess()
    {
        List<Annonces> annonces = crudAnnonces.getAnnoncesList() ;
        annoncesDTO.setAnnoncesAsList(annonces);
        return annoncesDTO ;
    }

    @GetMapping(path = "/annoncesAccueil")
    public AnnoncesDTO getAnnoncessAccueil()
    {
        List<Annonces> annonces = crudAnnonces.getAnnoncesPostees() ;
        annoncesDTO.setAnnoncesAsList(annonces);
        return annoncesDTO ;
    }

    @GetMapping("/annoncesAccueil/{key}")
    public AnnoncesDTO getMethodName(@PathVariable("key") String key) {
        AnnoncesDTO c = new AnnoncesDTO() ;
        try {
            c.setAnnoncesAsList(crudAnnonces.searchBy(key));            
        } catch (Exception e) {
            c.setErrors(e.getMessage());
        }
        return c;
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
        try {
            crudAnnonces.updateAnnonces(id, annoncesDTO.getAnnonces());
            
        } catch (Exception e) {
            annoncesDTO.setErrors(e.getMessage());
        }

        return annoncesDTO;
    }

    @DeleteMapping(path = "/annonces/{id}")
    public void deleteAnnonces(@PathVariable("id") final Integer id)
    {
        crudAnnonces.deleteAnnoncesByID(id);
    }    

    @GetMapping("/annoncesHistorique")
    public AnnoncesCompletDTO getHistorique(@RequestBody AnnoncesCompletDTO param) {
        try {
            param.setListAnnoncesComplet(AnnoncesComplet.select(DriverManager.getConnection(url, username, password),param.getUserID()));
        } catch (Exception e) {
            param.setErrors(e.getMessage());
        }
        return param;
    }
    
}
