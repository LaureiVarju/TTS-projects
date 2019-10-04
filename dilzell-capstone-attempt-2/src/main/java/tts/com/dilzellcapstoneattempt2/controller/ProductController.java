package tts.com.dilzellcapstoneattempt2.controller;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.querydsl.QPageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import tts.com.dilzellcapstoneattempt2.exception.ResourceNotFoundException;
import tts.com.dilzellcapstoneattempt2.model.Product;
import tts.com.dilzellcapstoneattempt2.repository.ProductRepository;

@CrossOrigin(origins = "http://localhost:4200")


@RestController
@RequestMapping("/api/v1")
public class ProductController {
    @Autowired
    private ProductRepository productRepository;

    //controller here
    public ProductController (ProductRepository productRepository) {
        this.productRepository = productRepository;
    }


    @GetMapping("/products")
        public Page<Product> getAllProducts() {
        Pageable page=PageRequest.of(0, 50, Sort.Direction.fromString("ASC"), "name");
        return productRepository.findAll(page);
    }

    @GetMapping("/products/pricedesc")
    public Page<Product> getAllbyPriceProducts() {
        Pageable page=PageRequest.of(0, 50, Sort.Direction.fromString("DESC"), "fullPrice");
        return productRepository.findAll(page);
    }

    @GetMapping("/products/saledesc")
    public Page<Product> getAllbySaleProducts() {
        Pageable page=PageRequest.of(0, 50, Sort.Direction.fromString("DESC"), "salePrice");
        return productRepository.findAll(page);
    }

    @GetMapping("/products/discount")
    public Page<Product> getAllbyDiscountProducts() {
        Pageable page=PageRequest.of(0, 50, Sort.Direction.fromString("DESC"), "discountPercentage");
        return productRepository.findAll(page);
    }



    @GetMapping("/products/bypriceavail")
    public Page<Product> getAllbyPriceAndAvailableProducts() {
        Pageable page=PageRequest.of(0, 50, Sort.by("availability").and(Sort.by("fullPrice").descending()));
        return productRepository.findAll(page);
    }


    @GetMapping("/products/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable(value = "id") Long productId)
            throws ResourceNotFoundException {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found for this id :: " + productId));
        return ResponseEntity.ok().body(product);
    }

    @PostMapping("/products")
    public Product createProduct(@Valid @RequestBody Product product ) {
        return productRepository.save(product);
    }

    @PutMapping("/products/{id}")
    public Product updateProduct(@PathVariable(value = "id") Long productId,
                                                 @Valid @RequestBody Product productDetails) throws ResourceNotFoundException {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found for this id :: " + productId));


        // add all of the columns here, there should be 7 now
        product.setSupplierId(productDetails.getSupplierId());
        product.setAvailability(productDetails.getAvailability());
        product.setSalePrice(productDetails.getSalePrice());
        product.setFullPrice(productDetails.getFullPrice()); //full price
        product.setCategoryId(productDetails.getCategoryId()); //category
        product.setName(productDetails.getName()); // name

        final Product updatedProduct = productRepository.save(product);
        return updatedProduct;
    }

    @DeleteMapping("/products/{id}")
    public Map<String, Boolean> deleteProduct(@PathVariable(value = "id") Long productId)
            throws ResourceNotFoundException {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found for this id :: " + productId));

        productRepository.delete(product);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }


//@GetMapping("/products/")
//    public Page<Product> findAllByPrice(){
//        Pageable page=PageRequest.of(0, 50, Sort.Direction.fromString("ASC"), "fullPrice");
//        productRepository.findAllByFullPrice(page);
//    }


}