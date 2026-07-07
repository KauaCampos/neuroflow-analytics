package com.neuroflow.subject.repository;
import com.neuroflow.subject.entity.Subject;import java.util.UUID;import org.springframework.data.jpa.repository.JpaRepository;
public interface SubjectRepository extends JpaRepository<Subject, UUID> {}
