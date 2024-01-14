package AutoOccazMarket.AutoOccazMarket.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import AutoOccazMarket.AutoOccazMarket.entities.Utilisateur;
import AutoOccazMarket.AutoOccazMarket.repositories.UtilisateurRepository;

@Service
public class CRUDutilisateur {

    @Autowired
    UtilisateurRepository utilisateurRepository;

    public List<Utilisateur> getUtilisateurList() {
        return utilisateurRepository.findAll();
    }

    public void deleteUtilisateurByID(Integer id) {
        utilisateurRepository.deleteById(id);

    }

    public Utilisateur postUtilisateur(Utilisateur utilisateur) {
        
        return utilisateurRepository.save(utilisateur);
    }

    public Utilisateur getUtilisateurByID(Integer id) {
        try {
            return utilisateurRepository.findById(id).get();
        } catch (java.util.NoSuchElementException e) {
            return null;
        }
    }

    public void updateUtilisateur(Integer id, AutoOccazMarket.AutoOccazMarket.entities.Utilisateur utilisateur) {
        Utilisateur utilisateurToUpdate = getUtilisateurByID(id);

        if (utilisateurToUpdate == null)
            return;

        if (utilisateur.getMail() != null) {
            utilisateurToUpdate.setMail(utilisateur.getMail());
        }
        if (utilisateur.getMdp() != null) {
            utilisateurToUpdate.setMdp(utilisateur.getMdp());
        }
        if (utilisateur.getPrenom() != null) {
            utilisateurToUpdate.setPrenom(utilisateur.getPrenom());
        }

        postUtilisateur(utilisateurToUpdate);
    }
}
