package dev.lucaslpsan.autoInfo.configs;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;

@Configuration
@PropertySource("classpath:application.properties")
public class SecurityConfiguration {

        @Value("spring.security.oauth2.resourceserver.jwt.jwk-set-uri")
        String jkw;

        @Bean
        SecurityWebFilterChain springSecurityFilterChain(ServerHttpSecurity http) {
                http
                                .authorizeExchange(exchanges -> exchanges
                                                .pathMatchers("/api/users/**").authenticated()
                                                .pathMatchers("/api/garage/**").authenticated()
                                                .anyExchange().permitAll())
                                .oauth2ResourceServer(oauth2 -> oauth2
                                                .jwt(jwt -> jwt
                                                                .jwkSetUri(
                                                                                "https://www.googleapis.com/service_accounts/v1/jwk/securetoken%40system.gserviceaccount.com")));
                return http.build();
        }

        // @Bean
        // SecurityWebFilterChain springSecurityFilterChain(ServerHttpSecurity http) {
        // http
        // .authorizeExchange(exchanges -> exchanges
        // .pathMatchers("/message/**").permitAll()
        // .anyExchange().authenticated())
        // .oauth2ResourceServer(oauth2 -> oauth2
        // .jwt(withDefaults()));
        // return http.build();
        // }

        // @Bean
        // public ReactiveJwtDecoder jwtDecoder() {
        // return ReactiveJwtDecoders.fromIssuerLocation(issuerUri);
        // }

}