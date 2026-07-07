package com.neuroflow.analytics.repository;
import com.neuroflow.analytics.entity.Streak;import java.util.UUID;import org.springframework.data.jpa.repository.JpaRepository;
public interface StreakRepository extends JpaRepository<Streak, UUID> {}
