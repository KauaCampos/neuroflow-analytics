package com.neuroflow;
import com.neuroflow.security.JwtProperties;import org.springframework.boot.SpringApplication;import org.springframework.boot.autoconfigure.SpringBootApplication;import org.springframework.boot.context.properties.EnableConfigurationProperties;
@SpringBootApplication
@EnableConfigurationProperties(JwtProperties.class)
public class NeuroflowApplication { public static void main(String[] args){ SpringApplication.run(NeuroflowApplication.class,args); } }
