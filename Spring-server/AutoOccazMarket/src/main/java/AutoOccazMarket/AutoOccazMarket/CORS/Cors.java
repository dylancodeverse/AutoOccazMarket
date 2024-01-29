package AutoOccazMarket.AutoOccazMarket.CORS;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class Cors {



    @Bean
    WebMvcConfigurer corsConfigurer(){
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry re){
                re.addMapping("/**").
                allowedMethods(CorsConfiguration.ALL).
                allowedHeaders(CorsConfiguration.ALL).
                allowedOriginPatterns("https://magenta-quokka-f70b53.netlify.app") ;
            }
        };
    }    
}
