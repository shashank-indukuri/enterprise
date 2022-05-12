package edu.depaul.se452.enterprise;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class EnterpriseApplication {

	@Value( "${spring.profiles.active:none set}" )
    private String profile;

	@Value ("${spring.datasource.url}")
	private String datasource;

	public static void main(String[] args) {
		SpringApplication.run(EnterpriseApplication.class, args);
	}

	@Bean
	public void sayToConsole() {
		System.out.println("Hello: " + profile);
		System.out.println("Hello: " + datasource);
	}

}
