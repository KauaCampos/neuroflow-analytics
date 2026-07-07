package com.neuroflow.task.repository;
import com.neuroflow.task.entity.Task;import java.util.UUID;import org.springframework.data.jpa.repository.JpaRepository;
public interface TaskRepository extends JpaRepository<Task, UUID> {}
