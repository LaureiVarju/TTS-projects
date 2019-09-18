package com.tts.demo.dao;

import com.tts.demo.Officer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

public class JdbcOfficerDAO implements OfficerDAO {
    private JdbcTemplate jdbcTemplate;
    private SimpleJdbcInsert insertOfficer;

    @Override
    public Officer save(Officer officer) {
        return null;
    }

    @Override
    public Optional<Officer> findById(Integer id) {
        return Optional.empty();
    }

    @Override
    public List<Officer> findAll() {
        return null;
    }


    @Override
    public long count() {
        return 0;
    }

    @Override
    public void delete(Officer officer) {

    }

    @Override
    public boolean existsById(Integer id) {
        return false;
    }

    @Autowired
    public JdbcOfficerDAO(DataSource dataSource) {
        jdbcTemplate = new JdbcTemplate(dataSource);
        insertOfficer = new SimpleJdbcInsert(dataSource)
                .withTableName("officers")
                .usingGeneratedKeyColumns("id");

        @Repository
        public class JdbcOfficerDAO implements OfficerDAO {
            // ... as before ...
        }
    }



// ... more to come ...

}