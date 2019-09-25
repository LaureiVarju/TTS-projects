package tts.com.dilzellcapstoneattempt2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tts.com.dilzellcapstoneattempt2.model.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long>{

}
