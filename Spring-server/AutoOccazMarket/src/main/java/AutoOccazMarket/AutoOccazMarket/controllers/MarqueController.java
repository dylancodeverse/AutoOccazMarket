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

import AutoOccazMarket.AutoOccazMarket.dto.MarqueDTO;
import AutoOccazMarket.AutoOccazMarket.entities.Marque;
import AutoOccazMarket.AutoOccazMarket.services.CRUDMarque;

@RestController
public class MarqueController {

    @Autowired
    private CRUDMarque crudMarque;

    @Autowired
    private MarqueDTO marquesDTO;

    @GetMapping(path = "/marques")
    public MarqueDTO getMarques() {
        List<Marque> marques = crudMarque.getMarqueList();
        marquesDTO.setMarqueAsList(marques);
        return marquesDTO;
    }

    @GetMapping(path = "/marques/{id}")
    public MarqueDTO getMarquesById(@PathVariable("id") final Integer id) {
        Marque marques = crudMarque.getMarqueByID(Integer.valueOf(id));
        marquesDTO.setMarque(marques);

        return marquesDTO;
    }

    @PostMapping(path = "/marques")
    public MarqueDTO saveMarque(@RequestBody MarqueDTO marquesDTO) {
        try {
            crudMarque.postMarque(marquesDTO.getMarque());

        } catch (Exception e) {
            marquesDTO.setErrors(e.getMessage());
        }

        return marquesDTO;

    }

    @PutMapping(path = "/marques/{id}")
    public MarqueDTO updateMarque(@PathVariable("id") final Integer id, @RequestBody MarqueDTO marquesDTO) {
        crudMarque.updateMarque(id, marquesDTO.getMarque());

        return marquesDTO;
    }

    @DeleteMapping(path = "/marques/{id}")
    public void deleteMarque(@PathVariable("id") final Integer id) {
        crudMarque.deleteMarqueByID(id);
    }
}
