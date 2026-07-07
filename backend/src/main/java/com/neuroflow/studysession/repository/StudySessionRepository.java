package com.neuroflow.studysession.repository;
import com.neuroflow.studysession.entity.StudySession;import java.util.UUID;import org.springframework.data.jpa.repository.JpaRepository;
public interface StudySessionRepository extends JpaRepository<StudySession, UUID> {}
