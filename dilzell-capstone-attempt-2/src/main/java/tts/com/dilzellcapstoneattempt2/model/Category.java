package tts.com.dilzellcapstoneattempt2.model;

import javax.persistence.*;


@Entity
@Table(name = "categories")
public class Category {
    //column 1
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    //column 2
    @Column(name = "name", nullable = true)
    private String name;


    public Category() {

    }

    public Category(String name) {
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
        return "Category [id=" + id + ", name=" + name +  "]";
    }

}
