package com.neuroflow.analytics.repository;
import com.neuroflow.analytics.entity.AIInteraction;import java.util.UUID;import org.springframework.data.jpa.repository.JpaRepository;
public interface AIInteractionRepository extends JpaRepository<AIInteraction, UUID> {}
