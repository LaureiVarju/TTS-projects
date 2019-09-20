package tts.com.dilzellcapstoneattempt2.model;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

//- id: unique identifier
//- name
//- category: ID relating to category table
//- full_price: up to two places of decimal
//- sale_price: up to two places of decimal
//- availability: boolean value stating is the product is in stock (true) or not (false)
//- supplier?: related table?

@Entity
@Table(name = "products")
public class Product {

    private int id;
    private String name;
    private int category;
    private double fullPrice;
    private double salePrice;
    private boolean availability;
    private int supplier;

    public Product() {

    }

    public Product(String name, int category, double fullPrice, double salePrice, boolean availability, int supplier) {
        this.name = name;
        this.category = category;
        this.fullPrice = fullPrice;
        this.salePrice = salePrice;
        this.availability = availability;
        this.supplier = supplier;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    @Column(name = "name", nullable = false)
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    @Column(name = "category", nullable = false)
    public int getCategoryId() {
        return category;
    }
    public void setCategoryId(int category) {
        this.category = category;
    }

    @Column(name = "full_price", nullable = false)
    public double getFullPrice() {
        return fullPrice;
    }
    public void setFullPrice(double fullPrice) {
        this.fullPrice = fullPrice;
    }

    @Column(name = "sale_price", nullable = false)
    public double getSalePrice() {
        return salePrice;
    }
    public void setSalePrice(double salePrice) {
        this.salePrice = salePrice;
    }

    @Column(name = "availability", nullable = false)
    public boolean getAvailability() {
        return availability;
    }
    public void setAvailability(boolean availability) {
        this.availability = availability;
    }

    @Column(name = "supplier", nullable = false)
    public int getSupplierId() {
        return supplier;
    }
    public void setSupplierId(int supplier) {
        this.supplier = supplier;
    }

    @Override
    public String toString() {
        return "Employee [id=" + id + ", name=" + name + ", category=" + category + ", full_price=" + fullPrice +
                ", sale_price=" + salePrice + ", availability=" + availability + ", supplier=" + supplier
                + "]";
    }

}
