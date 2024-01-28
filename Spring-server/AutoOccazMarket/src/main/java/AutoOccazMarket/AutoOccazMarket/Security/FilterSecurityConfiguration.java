package AutoOccazMarket.AutoOccazMarket.Security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import AutoOccazMarket.AutoOccazMarket.Security.JWT.Filter.Admin.AllPermission;
import AutoOccazMarket.AutoOccazMarket.Security.JWT.Filter.AllGetForAll.AllGetForAll;
import AutoOccazMarket.AutoOccazMarket.Security.JWT.Filter.ClientAdmin.OnlyGetForClient;


@Component
@Configuration
public class FilterSecurityConfiguration 
{
    @Autowired
    private AllPermission adminAllPermission;

    @Autowired 
    private OnlyGetForClient clientAdmin ;

    @Autowired
    private AllGetForAll allGetForAll ;

    @Bean
    public FilterRegistrationBean<AllPermission> filterConfigurationForAdminOnly(){
        FilterRegistrationBean<AllPermission> registrationBean 
              = new FilterRegistrationBean<>();
            
        registrationBean.setFilter(adminAllPermission);
     
        registrationBean.addUrlPatterns(
            "/commissions", "/annoncesNonPostees" ,"/modelesStats" ,"/AnnoncesClotureesStats"
                            ,"/userAdmin"  );
        
        registrationBean.setOrder(1);

        return registrationBean;    
    }

    @Bean
    public FilterRegistrationBean<OnlyGetForClient> filterConfForAdminAndClient(){
        FilterRegistrationBean<OnlyGetForClient> registrationBean 
            = new FilterRegistrationBean<>();

        registrationBean.setFilter(clientAdmin);
        registrationBean.addUrlPatterns("");


        registrationBean.setOrder(1);
        
        return registrationBean;
    }

    @Bean
    public FilterRegistrationBean<AllGetForAll> filterConfForGetMethodForAll(){
        FilterRegistrationBean<AllGetForAll> registrationBean 
        = new FilterRegistrationBean<>();

        registrationBean.setFilter(allGetForAll);
        registrationBean.addUrlPatterns("/carburants/*" , "/categories/*" , "/marques/*" ,"/modeles/*"
        );

        registrationBean.setOrder(1);
        return registrationBean;


    }
    


}