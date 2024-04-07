package com.ShopWebApplicationBackend.Backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories
@SpringBootApplication
public class BackendApplication {


	private static Initializer initiator;

	@Autowired
	public void setInitialLoader(Initializer initiator) {
		BackendApplication.initiator = initiator;
	}


	public static void main(String[] args) {

		SpringApplication.run(BackendApplication.class, args);
		initiator.initial();
	}

}
