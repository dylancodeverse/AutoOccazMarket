package AutoOccazMarket.AutoOccazMarket.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import AutoOccazMarket.AutoOccazMarket.entities.Commission;
import AutoOccazMarket.AutoOccazMarket.repositories.CommissionRepository;

@Service
public class CRUDCommission {
    
    @Autowired
    CommissionRepository commissionRepository ;

    public List<Commission> getCommissionList() 
    {
        return commissionRepository.findAll();
    }

    public void deleteCommissionByID(Integer id)
    {
        commissionRepository.deleteById(id);

    }

    public Commission postCommission(Commission commission)
    {
        return commissionRepository.save(commission) ;
    }

    public Commission getCommissionByID (Integer id)
    {
        try 
        {
            return commissionRepository.findById(id).get();
        } 
        catch (java.util.NoSuchElementException e) 
        {
            return null ;
        }
    }

    public void updateCommission(Integer id , Commission commission)
    {
        Commission commissionToUpdate = getCommissionByID(id) ;

        if(commissionToUpdate == null) return;


        if (commission.getAnnonces()!=null) {
            commissionToUpdate.setAnnonces(commission.getAnnonces());                    
        }

        if (commission.getMoisvalidable()!=null) {
            commissionToUpdate.setMoisvalidable(commission.getMoisvalidable());                    
        }
        if (commission.getPourcentages()!=null) {
            commissionToUpdate.setPourcentages(commission.getPourcentages());                    
        }
        postCommission(commissionToUpdate) ;
    }


    
}