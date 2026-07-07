package com.neuroflow.goal.repository;
import com.neuroflow.goal.entity.Goal;import java.util.UUID;import org.springframework.data.jpa.repository.JpaRepository;
public interface GoalRepository extends JpaRepository<Goal, UUID> {}
