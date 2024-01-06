package AutoOccazMarket.AutoOccazMarket.dto;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import AutoOccazMarket.AutoOccazMarket.entities.PhotoAnnonce;



@Component
public class PhotoAnnonceDTO 
{
    @Autowired
    PhotoAnnonce [] listPhotoAnnonce ;    

    PhotoAnnonce photoannonces ;

    String errors ;

    public void setPhotoAnnonceAsList(List<PhotoAnnonce> list)
    {
        listPhotoAnnonce = list.toArray(new PhotoAnnonce[list.size()]);
    }

    public PhotoAnnonce[] getListPhotoAnnonce() {
        return listPhotoAnnonce;
    }

    public void setListPhotoAnnonce(PhotoAnnonce[] listPhotoAnnonce) {
        this.listPhotoAnnonce = listPhotoAnnonce;
    }

    public PhotoAnnonce getPhotoAnnonce() {
        return photoannonces;
    }

    public void setPhotoAnnonce(PhotoAnnonce photoannonces) {
        this.photoannonces = photoannonces;
    }

    public String getErrors() {
        return errors;
    }

    public void setErrors(String errors) {
        this.errors = errors;
    }

}

