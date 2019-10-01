package tts.com.dilzellcapstoneattempt2.model;
import org.hibernate.annotations.Formula;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.*;
import java.math.BigDecimal;

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
//column 1
    @Id

    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private long id;

    //column 2
    @Column(name = "name", nullable = false)

    private String name;

    //column 3
    @ManyToOne
    @JoinColumn(name = "category", nullable = true)
    private Category category;
    //column 4
    @Column(name = "full_price", nullable = false, precision = 2)
    private double fullPrice;

    //column 5
    @Column(name = "sale_price", nullable = false, precision = 2)
        private double salePrice;

   @Formula(value = "((full_price - sale_price) / full_price)")
    private BigDecimal discountPercentage;

    //column 6
    @Column(name = "availability", nullable = false)
    private boolean availability;
    //column 7
    @ManyToOne
    @JoinColumn(name = "supplier", nullable = true)
    private Supplier supplier;

    public Product() {

    }

    public Product(String name, Category category, double fullPrice, double salePrice, boolean availability, Supplier supplier) {
        this.name = name;
        this.category = category;
        this.fullPrice = fullPrice;
        this.salePrice = salePrice;
        this.availability = availability;
        this.supplier = supplier;
    }

   // @Id
    //@GeneratedValue(strategy = GenerationType.AUTO)
    public long getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

   // @Column(name = "name", nullable = false)
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

   // @Column(name = "category", nullable = false)
    public Category getCategoryId() {
        return category;
    }
    public void setCategoryId(Category category) {
        this.category = category;
    }

   // @Column(name = "full_price", nullable = false, precision = 2)
    public double getFullPrice() {
        return fullPrice;
    }
    public void setFullPrice(double fullPrice) {
        this.fullPrice = fullPrice;
    }

   // @Column(name = "sale_price", nullable = false)
    public double getSalePrice() {
        return salePrice;
    }
    public void setSalePrice(double salePrice) {
        this.salePrice = salePrice;
    }

    // @Column(name = "sale_price", nullable = false)
    public BigDecimal getDiscountPercentage() {
        return discountPercentage;
    }


    //@Column(name = "availability", nullable = false)
    public boolean getAvailability() {
        return availability;
    }
    public void setAvailability(boolean availability) {
        this.availability = availability;
    }

   // @Column(name = "supplier", nullable = false)
    public Supplier getSupplierId() {
        return supplier;
    }
    public void setSupplierId(Supplier supplier) {
        this.supplier = supplier;
    }

    @Override
    public String toString() {
        return "Employee [id=" + id + ", name=" + name + ", category=" + category + ", full_price=" + fullPrice +
                ", sale_price=" + salePrice + ", discountPercentage=" + discountPercentage + ", availability=" + availability + ", supplier=" + supplier
                + "]";
    }

}
