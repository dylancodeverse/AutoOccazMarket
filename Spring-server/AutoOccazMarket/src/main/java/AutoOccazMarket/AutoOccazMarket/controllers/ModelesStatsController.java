package AutoOccazMarket.AutoOccazMarket.controllers;

import org.springframework.web.bind.annotation.RestController;

import AutoOccazMarket.AutoOccazMarket.dto.ModelesStatsDTO;
import AutoOccazMarket.AutoOccazMarket.entities.ModelesStats;

import java.sql.Connection;
import java.sql.DriverManager;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;



@RestController
@CrossOrigin(origins = "${frontend.url}")
public class ModelesStatsController 
{
    @Value("${spring.datasource.url}")
    private String url ;

    @Value("${spring.datasource.username}")
    private String username ;

    @Value("${spring.datasource.password}")
    private String password ;


    @GetMapping("/modelesStats")
    public ModelesStatsDTO getAll() {
        ModelesStatsDTO m = new ModelesStatsDTO();
        try {
            Connection con = DriverManager.getConnection(url, username, password) ;
            m.setListModelesStats( ModelesStats.select(con));
        } catch (Exception e) {
            m.setErrors(e.getMessage());
        }
        return m ;
    }

    @GetMapping("/modelesStats")
    public ModelesStatsDTO sortBy(@RequestParam String order , @RequestParam String by) {
        ModelesStatsDTO m = new ModelesStatsDTO();
        try {
            Connection con = DriverManager.getConnection(url, username, password) ;
            m.setListModelesStats( ModelesStats.sortBy(con,by,order));
        } catch (Exception e) {
            m.setErrors(e.getMessage());
        }
        return m ;
    }
    
}