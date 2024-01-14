package AutoOccazMarket.AutoOccazMarket.controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import AutoOccazMarket.AutoOccazMarket.Security.JWT.utils.JWTGenerator;
import AutoOccazMarket.AutoOccazMarket.dto.UtilisateurDTO;
import AutoOccazMarket.AutoOccazMarket.entities.Utilisateur;
import AutoOccazMarket.AutoOccazMarket.services.userSecurity.RegisterService;
import AutoOccazMarket.AutoOccazMarket.services.userSecurity.UserAuth;

public class AuthentificationController {

    @Autowired
    RegisterService registerService ;

    @Autowired
    private JWTGenerator jwtGenerator;

    @Autowired
    private UserAuth userAuth ;

    @PostMapping("/register")
    public UtilisateurDTO register(@RequestBody UtilisateurDTO utilisateurDTO){
        try {
            
            Utilisateur user = utilisateurDTO.getUtilisateur();
            registerService.registerUser(user);
        } catch (Exception e) {
            utilisateurDTO.setErrors(e.getMessage());
        }
        return utilisateurDTO ;

    } 
    @PostMapping("/login")
    public UtilisateurDTO login(@RequestBody UtilisateurDTO utilisateurDTO){
        try {
            Utilisateur u = userAuth.login(utilisateurDTO.getUtilisateur()) ;                       

            String token =  jwtGenerator.generateToken(u.getMail(), u.getPrenom()+" "+u.getNom(), u.getHierarchie().toString());

            Map<String, String> response = new HashMap<>();
                response.put("accessToken", token);
                response.put("tokenType", "Bearer");

            utilisateurDTO.setTokenInformation(response);
        
        } catch (Exception e) {
            utilisateurDTO.setErrors("Erreur au niveau login: "+ e.getMessage());
        }
        return utilisateurDTO ;

    }
}
