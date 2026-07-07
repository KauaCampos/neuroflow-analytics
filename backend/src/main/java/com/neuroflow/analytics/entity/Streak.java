package com.neuroflow.analytics.entity;
import com.neuroflow.user.entity.User;import jakarta.persistence.*;import java.time.*;import java.util.UUID;import lombok.Getter;import lombok.Setter;
@Getter @Setter @Entity @Table(name="streaks")
public class Streak { @Id @GeneratedValue(strategy=GenerationType.UUID) private UUID id; @OneToOne(fetch=FetchType.LAZY,optional=false) @JoinColumn(name="user_id",nullable=false,unique=true) private User user; @Column(name="current_streak",nullable=false) private Integer currentStreak; @Column(name="best_streak",nullable=false) private Integer bestStreak; @Column(name="last_study_date") private LocalDate lastStudyDate; @Column(name="updated_at",nullable=false) private Instant updatedAt; }
