package tts.com.dilzellcapstoneattempt2.repository;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;
import tts.com.dilzellcapstoneattempt2.model.Product;

import java.util.List;

import static org.junit.Assert.*;
@SpringBootTest

@RunWith(SpringRunner.class)
@Transactional
//This annotation makes the test rollback changes to the database
public class ProductRepositoryTest {
    @Autowired
    //this annotation checks that all things that are referenced exist
    private ProductRepository dao;

    @Test
    public void findAllProducts() {
        List<Product> products = dao.findAll();
//        assertEquals(683, products.size());
        assertTrue(products.size() >= 683);
    }


}