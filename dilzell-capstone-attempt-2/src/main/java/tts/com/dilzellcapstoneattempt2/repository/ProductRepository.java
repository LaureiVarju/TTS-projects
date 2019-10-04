package tts.com.dilzellcapstoneattempt2.repository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tts.com.dilzellcapstoneattempt2.model.Product;

import java.awt.color.ProfileDataException;
import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>{
    Page<Product> findAllByFullPrice(Pageable pageable);



}

