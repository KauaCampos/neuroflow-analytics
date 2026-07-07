package com.neuroflow.user.entity;
import jakarta.persistence.*;import java.time.Instant;import java.util.UUID;import lombok.Getter;import lombok.Setter;
@Getter @Setter @Entity @Table(name="users", indexes=@Index(name="idx_users_email", columnList="email"))
public class User { @Id @GeneratedValue(strategy=GenerationType.UUID) private UUID id; @Column(nullable=false,length=120) private String name; @Column(nullable=false,unique=true,length=160) private String email; @Column(name="password_hash",nullable=false) private String passwordHash; @Column(nullable=false,length=30) private String status; @Column(name="created_at",nullable=false) private Instant createdAt; @Column(name="updated_at",nullable=false) private Instant updatedAt; }
