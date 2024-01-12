package AutoOccazMarket.AutoOccazMarket.controllers;

import org.springframework.web.bind.annotation.RestController;

import AutoOccazMarket.AutoOccazMarket.dto.ModelesStatsDTO;
import AutoOccazMarket.AutoOccazMarket.entities.ModelesStats;

import java.sql.Connection;

import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class ModelesStatsController 
{
    @GetMapping("/modelesStatsController")
    public ModelesStatsDTO getAll() {
        ModelesStatsDTO m = new ModelesStatsDTO();
        try {
            Connection connection =null;
            m.setListModelesStats( ModelesStats.select(connection));
        } catch (Exception e) {
            m.setErrors(e.getMessage());
        }
        return m ;
    }
}