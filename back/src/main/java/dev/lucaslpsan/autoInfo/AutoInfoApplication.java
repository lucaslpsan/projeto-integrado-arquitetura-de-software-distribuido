package dev.lucaslpsan.autoInfo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.google.api.gax.core.CredentialsProvider;
import com.google.api.gax.core.NoCredentialsProvider;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeIn;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.security.SecurityScheme;

@SpringBootApplication
@EnableTransactionManagement
@OpenAPIDefinition(info = @Info(title = "Auto Info API", version = "1.0", description = "Projeto Auto Info - API da plataforma e módulo de usuário e ficha técnica."))
@SecurityScheme(name = "FirebaseAuth", scheme = "bearer", bearerFormat = "JWT", type = SecuritySchemeType.HTTP, in = SecuritySchemeIn.HEADER)
public class AutoInfoApplication {

	@Bean
	@ConditionalOnProperty(value = "spring.cloud.gcp.firestore.emulator.enabled", havingValue = "true")
	public CredentialsProvider googleCredentials() {
		return NoCredentialsProvider.create();
	}

	public static void main(String[] args) {
		SpringApplication.run(AutoInfoApplication.class, args);
	}

}
