package AutoOccazMarket.AutoOccazMarket.services.userSecurity;

import org.springframework.beans.factory.annotation.Autowired;

import AutoOccazMarket.AutoOccazMarket.Security.Encoder.SHA256PasswordEncoder;
import AutoOccazMarket.AutoOccazMarket.entities.Utilisateur;
import AutoOccazMarket.AutoOccazMarket.repositories.UtilisateurRepository;

public class UserAuth {

    @Autowired
    UtilisateurRepository utilisateurRepository;

    public Utilisateur login(Utilisateur utilisateur) throws Exception{
        Utilisateur u = null;
        try {
            u = utilisateurRepository.findByMail(utilisateur.getMail()).get();
        } catch (Exception e) {
            throw new Exception("Utilisateur non trouve:"+e.getMessage());
        }
        SHA256PasswordEncoder passwordEncoder = new SHA256PasswordEncoder();

        if (passwordEncoder.matches(utilisateur.getMdp(),u.getMdp() )) {
            return u;
        }else{
            throw new Exception("Identifiant invalide ou mot de passe invalide ");
        }


    }
    
}
