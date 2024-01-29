package AutoOccazMarket.AutoOccazMarket.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import AutoOccazMarket.AutoOccazMarket.entities.Utilisateur;

public interface UtilisateurRepository extends JpaRepository<Utilisateur, Integer> {
    Boolean existsByMail(@Param("mail") String mail) ;

    Optional<Utilisateur> findByMail(@Param("mail") String mail);

    List<Utilisateur> findByHierarchieGreaterThan(@Param("hierarchie") Integer hierarchie);

    Page<Utilisateur> findByHierarchieGreaterThan(int i, PageRequest of);

}   
