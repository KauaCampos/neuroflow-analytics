package com.neuroflow.security;
import org.springframework.stereotype.Service;
@Service
public class JwtTokenService { public String generateToken(String subject){ return subject; } public boolean isValid(String token){ return token!=null && !token.isBlank(); } }
