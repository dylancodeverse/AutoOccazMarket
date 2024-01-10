package AutoOccazMarket.AutoOccazMarket.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import AutoOccazMarket.AutoOccazMarket.dto.ValidationAnnoncesHistoriqueDTO;
import AutoOccazMarket.AutoOccazMarket.entities.ValidationAnnoncesHistorique;
import AutoOccazMarket.AutoOccazMarket.services.CRUDValidationAnnoncesHistorique;

public class ValidationAnnoncesHistoriqueController {
    @Autowired
    private CRUDValidationAnnoncesHistorique crudValidationAnnoncesHistorique;

    @Autowired
    private ValidationAnnoncesHistoriqueDTO utilisateursDTO;

    @GetMapping(path = "/utilisateurs")
    public ValidationAnnoncesHistoriqueDTO getValidationAnnoncesHistoriques() {
        List<ValidationAnnoncesHistorique> utilisateurs = crudValidationAnnoncesHistorique.getValidationAnnoncesHistoriqueList();
        utilisateursDTO.setValidationAnnoncesHistoriqueAsList(utilisateurs);
        return utilisateursDTO;
    }

    @GetMapping(path = "/utilisateurs/{id}")
    public ValidationAnnoncesHistoriqueDTO getValidationAnnoncesHistoriquesById(@PathVariable("id") final Integer id) {
        ValidationAnnoncesHistorique utilisateurs = crudValidationAnnoncesHistorique.getValidationAnnoncesHistoriqueByID(Integer.valueOf(id));
        utilisateursDTO.setValidationAnnoncesHistorique(utilisateurs);

        return utilisateursDTO;
    }

    @PostMapping(path = "/utilisateurs")
    public ValidationAnnoncesHistoriqueDTO saveValidationAnnoncesHistorique(@RequestBody ValidationAnnoncesHistoriqueDTO utilisateursDTO) {
        try {
            crudValidationAnnoncesHistorique.postValidationAnnoncesHistorique(utilisateursDTO.getValidationAnnoncesHistorique());

        } catch (Exception e) {
            utilisateursDTO.setErrors(e.getMessage());
        }

        return utilisateursDTO;

    }


}
