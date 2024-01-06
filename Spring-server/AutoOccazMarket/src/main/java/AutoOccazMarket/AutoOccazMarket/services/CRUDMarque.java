package AutoOccazMarket.AutoOccazMarket.services;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



import AutoOccazMarket.AutoOccazMarket.entities.Marque;
import AutoOccazMarket.AutoOccazMarket.repositories.MarqueRepository;

@Service
public class CRUDMarque {
    
    @Autowired
    MarqueRepository marqueRepository ;

    public List<Marque> getMarqueList() 
    {
        return marqueRepository.findAll();
    }

    public void deleteMarqueByID(Integer id)
    {
        marqueRepository.deleteById(id);

    }

    public Marque postMarque(Marque marque)
    {
        return marqueRepository.save(marque) ;
    }

    public Marque getMarqueByID (Integer id)
    {
        try 
        {
            return marqueRepository.findById(id).get();
        } 
        catch (java.util.NoSuchElementException e) 
        {
            return null ;
        }
    }

    public void updateMarque(Integer id , Marque marque)
    {
        Marque marqueToUpdate = getMarqueByID(id) ;

        if(marqueToUpdate == null) return;

        if(marque.getMarque()!=null)

        if(marque.getMarque()!=null){
            marqueToUpdate.setMarque(marque.getMarque());
        }

        marqueToUpdate.setMarque(marque.getMarque());        

        postMarque(marqueToUpdate) ;
    }


    
}