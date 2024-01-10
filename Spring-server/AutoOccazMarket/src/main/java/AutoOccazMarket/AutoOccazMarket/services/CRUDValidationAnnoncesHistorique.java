package AutoOccazMarket.AutoOccazMarket.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import AutoOccazMarket.AutoOccazMarket.entities.ValidationAnnoncesHistorique;
import AutoOccazMarket.AutoOccazMarket.repositories.ValidationAnnoncesHistoriqueRepository;

public class CRUDValidationAnnoncesHistorique {
    @Autowired
    ValidationAnnoncesHistoriqueRepository validationAnnoncesHistoriqueRepository;

    public List<ValidationAnnoncesHistorique> getValidationAnnoncesHistoriqueList() {
        return validationAnnoncesHistoriqueRepository.findAll();
    }

    public void deleteValidationAnnoncesHistoriqueByID(Integer id) {
        validationAnnoncesHistoriqueRepository.deleteById(id);

    }

    public ValidationAnnoncesHistorique postValidationAnnoncesHistorique(ValidationAnnoncesHistorique validationAnnoncesHistorique) {
        return validationAnnoncesHistoriqueRepository.save(validationAnnoncesHistorique);
    }

    public ValidationAnnoncesHistorique getValidationAnnoncesHistoriqueByID(Integer id) {
        try {
            return validationAnnoncesHistoriqueRepository.findById(id).get();
        } catch (java.util.NoSuchElementException e) {
            return null;
        }
    }


}
