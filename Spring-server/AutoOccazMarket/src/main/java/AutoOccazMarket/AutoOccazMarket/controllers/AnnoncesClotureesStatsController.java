package AutoOccazMarket.AutoOccazMarket.controllers;

import org.springframework.web.bind.annotation.RestController;

import AutoOccazMarket.AutoOccazMarket.dto.AnnoncesClotureesStatsDTO;
import AutoOccazMarket.AutoOccazMarket.entities.AnnoncesClotureesStats;

import java.sql.Connection;

import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class AnnoncesClotureesStatsController {

    @GetMapping("/AnnoncesClotureesStats")
    public AnnoncesClotureesStatsDTO select() {
        AnnoncesClotureesStatsDTO c = new AnnoncesClotureesStatsDTO();
        try {
            Connection con = null ;
            c.setListAnnoncesClotureesStats(AnnoncesClotureesStats.select(con));            
        } catch (Exception e) {
            c.setErrors(e.getMessage());            
        }
        return c ;
    }
    
}
