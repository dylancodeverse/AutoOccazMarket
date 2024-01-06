package AutoOccazMarket.AutoOccazMarket.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import AutoOccazMarket.AutoOccazMarket.dto.CommissionDTO;
import AutoOccazMarket.AutoOccazMarket.entities.Commission;
import AutoOccazMarket.AutoOccazMarket.services.CRUDCommission;


@RestController
public class CommissionController 
{

    @Autowired
    private CRUDCommission crudCommission ;

    @Autowired
    private CommissionDTO commssionsDTO ;


    @GetMapping(path = "/commssions")
    public CommissionDTO getCommissions()
    {
        List<Commission> commssions = crudCommission.getCommissionList() ;
        commssionsDTO.setCommissionAsList(commssions);
        return commssionsDTO ;
    }

    @GetMapping(path = "/commssions/{id}")
    public CommissionDTO getCommissionsById(@PathVariable("id") final Integer id)
    {
        Commission commssions = crudCommission.getCommissionByID(Integer.valueOf(id)) ;
        commssionsDTO.setCommission(commssions) ;

        return commssionsDTO ;
    }

    @PostMapping(path = "/commssions")
    public CommissionDTO saveCommission(@RequestBody CommissionDTO commssionsDTO)
    {
        try {
            crudCommission.postCommission(commssionsDTO.getCommission());
            
        } catch (Exception e) {
            commssionsDTO.setErrors(e.getMessage());
        }

        return commssionsDTO;

    }    

    @PutMapping(path ="/commssions/{id}")
    public CommissionDTO updateCommission(@PathVariable("id") final Integer id , @RequestBody CommissionDTO commssionsDTO)
    {
        crudCommission.updateCommission(id, commssionsDTO.getCommission());

        return commssionsDTO;
    }

    @DeleteMapping(path = "/commssions/{id}")
    public void deleteCommission(@PathVariable("id") final Integer id)
    {
        crudCommission.deleteCommissionByID(id);
    }    
}
