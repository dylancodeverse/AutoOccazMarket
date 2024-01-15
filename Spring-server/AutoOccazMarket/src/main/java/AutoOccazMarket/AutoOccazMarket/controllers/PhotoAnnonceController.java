package AutoOccazMarket.AutoOccazMarket.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import AutoOccazMarket.AutoOccazMarket.dto.PhotoAnnonceDTO;
import AutoOccazMarket.AutoOccazMarket.entities.PhotoAnnonce;
import AutoOccazMarket.AutoOccazMarket.services.CRUDPhotoAnnonce;

@RestController
@CrossOrigin(origins = "${UrlConfig.frontendUrl}")
public class PhotoAnnonceController {

    @Autowired
    private CRUDPhotoAnnonce crudPhotoAnnonce;

    @Autowired
    private PhotoAnnonceDTO photoannoncesDTO;

    @GetMapping(path = "/photoannonces")
    public PhotoAnnonceDTO getPhotoAnnonces() {
        List<PhotoAnnonce> photoannonces = crudPhotoAnnonce.getPhotoAnnonceList();
        photoannoncesDTO.setPhotoAnnonceAsList(photoannonces);
        return photoannoncesDTO;
    }

    @GetMapping(path = "/photoannonces/{id}")
    public PhotoAnnonceDTO getPhotoAnnoncesById(@PathVariable("id") final Integer id) {
        PhotoAnnonce photoannonces = crudPhotoAnnonce.getPhotoAnnonceByID(Integer.valueOf(id));
        photoannoncesDTO.setPhotoAnnonce(photoannonces);

        return photoannoncesDTO;
    }

    @PostMapping(path = "/photoannonces")
    public PhotoAnnonceDTO savePhotoAnnonce(@RequestBody PhotoAnnonceDTO photoannoncesDTO) {
        try {
            crudPhotoAnnonce.postPhotoAnnonce(photoannoncesDTO.getPhotoAnnonce());

        } catch (Exception e) {
            photoannoncesDTO.setErrors(e.getMessage());
        }

        return photoannoncesDTO;

    }

    @PutMapping(path = "/photoannonces/{id}")
    public PhotoAnnonceDTO updatePhotoAnnonce(@PathVariable("id") final Integer id, @RequestBody PhotoAnnonceDTO photoannoncesDTO) {
        crudPhotoAnnonce.updatePhotoAnnonce(id, photoannoncesDTO.getPhotoAnnonce());

        return photoannoncesDTO;
    }

    @DeleteMapping(path = "/photoannonces/{id}")
    public void deletePhotoAnnonce(@PathVariable("id") final Integer id) {
        crudPhotoAnnonce.deletePhotoAnnonceByID(id);
    }
}
