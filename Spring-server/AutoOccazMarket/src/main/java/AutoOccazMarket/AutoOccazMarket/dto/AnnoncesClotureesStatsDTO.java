package AutoOccazMarket.AutoOccazMarket.dto;

import java.util.List;

import org.springframework.stereotype.Component;

import AutoOccazMarket.AutoOccazMarket.entities.AnnoncesClotureesStats;;
/**
 * AnnoncesClotureesStatsDTO
 */
@Component
public class AnnoncesClotureesStatsDTO 
{
    AnnoncesClotureesStats [] listAnnoncesClotureesStats ;    

    AnnoncesClotureesStats AnnoncesClotureesStats ;

    String errors ;

    public void setAnnoncesClotureesStatsAsList(List<AnnoncesClotureesStats> list)
    {
        listAnnoncesClotureesStats = list.toArray(new AnnoncesClotureesStats[list.size()]);
    }

    public AnnoncesClotureesStats[] getListAnnoncesClotureesStats() {
        return listAnnoncesClotureesStats;
    }

    public void setListAnnoncesClotureesStats(AnnoncesClotureesStats[] listAnnoncesClotureesStats) {
        this.listAnnoncesClotureesStats = listAnnoncesClotureesStats;
    }

    public AnnoncesClotureesStats getAnnoncesClotureesStats() {
        return AnnoncesClotureesStats;
    }

    public void setAnnoncesClotureesStats(AnnoncesClotureesStats AnnoncesClotureesStats) {
        this.AnnoncesClotureesStats = AnnoncesClotureesStats;
    }

    public String getErrors() {
        return errors;
    }

    public void setErrors(String errors) {
        this.errors = errors;
    }
}