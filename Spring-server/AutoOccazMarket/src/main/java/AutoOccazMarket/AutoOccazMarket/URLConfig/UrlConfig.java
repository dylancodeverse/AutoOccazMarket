package AutoOccazMarket.AutoOccazMarket.URLConfig;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class UrlConfig {
    
    @Value("${frontend.url}")
    private String frontendUrl;

    public String getFrontendUrl() {
        return frontendUrl;
    }    
}
