package com.chrome;

/*@SpringBootApplication
public class ExperimentApplication {

    public static void main(String[] args) {
        SpringApplication.run(ExperimentApplication.class, args);
    }
}*/

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class ExperimentApplication extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(ExperimentApplication.class);
    }

    public static void main(String[] args) {
        SpringApplication.run(ExperimentApplication.class, args);
    }
}
