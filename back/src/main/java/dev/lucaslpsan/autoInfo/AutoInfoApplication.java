package dev.lucaslpsan.autoInfo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.google.api.gax.core.CredentialsProvider;
import com.google.api.gax.core.NoCredentialsProvider;

@SpringBootApplication
@EnableTransactionManagement
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
