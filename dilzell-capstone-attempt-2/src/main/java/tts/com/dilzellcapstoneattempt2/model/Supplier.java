package tts.com.dilzellcapstoneattempt2.model;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "suppliers")
public class Supplier {
    //column 1
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    //column 2
    @Column(name = "name", nullable = true)
    private String name;


    public Supplier() {

    }

    public Supplier(String name) {
        this.name = name;
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


    @Override
    public String toString() {
        return "Employee [id=" + id + ", name=" + name +  "]";
    }

}
