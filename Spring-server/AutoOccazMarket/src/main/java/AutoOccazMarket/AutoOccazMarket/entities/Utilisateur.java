package AutoOccazMarket.AutoOccazMarket.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Utilisateur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_utilisateur")
    private Integer idutilisateur;

    @Column(nullable = false, unique = true, length = 250)
    private String mail;

    @Column(nullable = false, unique = true, length = 250)
    private String mdp;

    @Column(nullable = false, unique = true, length = 250)
    private String prenom;

    @Column(nullable = false, unique = true, length = 250)
    private String hierarchie;

    /**
     * @return Integer return the idutilisateur
     */
    public Integer getIdutilisateur() {
        return idutilisateur;
    }

    /**
     * @param idutilisateur the idutilisateur to set
     */
    public void setIdutilisateur(Integer idutilisateur) {
        this.idutilisateur = idutilisateur;
    }

    /**
     * @return String return the mail
     */
    public String getMail() {
        return mail;
    }

    /**
     * @param mail the mail to set
     */
    public void setMail(String mail) {
        this.mail = mail;
    }

    /**
     * @return String return the mdp
     */
    public String getMdp() {
        return mdp;
    }

    /**
     * @param mdp the mdp to set
     */
    public void setMdp(String mdp) {
        this.mdp = mdp;
    }

    /**
     * @return String return the prenom
     */
    public String getPrenom() {
        return prenom;
    }

    /**
     * @param prenom the prenom to set
     */
    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    /**
     * @return String return the hierarchie
     */
    public String getHierarchie() {
        return hierarchie;
    }

    /**
     * @param hierarchie the hierarchie to set
     */
    public void setHierarchie(String hierarchie) {
        this.hierarchie = hierarchie;
    }

}
