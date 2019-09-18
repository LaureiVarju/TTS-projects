package com.tts.demo.dao;

import com.tts.demo.Officer;
import com.tts.demo.Rank;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static org.junit.Assert.*;
@RunWith(SpringRunner.class)
@SpringBootTest
public class JdbcOfficerDAOTest {

    //at least 6 tests based on how many methods in officerdao
    @Autowired
    private OfficerDAO dao;

    @Test
    public void save() throws Exception {
        Officer officer = new Officer(Rank.CAPTAIN, "Christopher", "Pike");
        officer = dao.save(officer);
        assertNotNull(officer.getID());

        @Test
        public void findByIdThatExists () throws Exception {
            Optional<Officer> officer = dao.findById(1);
            assertTrue(officer.isPresent());
            assertEquals(1, officer.get().getId().intValue());
        }

        @Test
        public void findByIdThatDoesNotExist () throws Exception {
            Optional<Officer> officer = dao.findById(999);
            assertFalse(officer.isPresent());
        }

        @Test
        public void count () throws Exception {
            assertEquals(5, dao.count());
        }

        @Test
        public void findAll() throws Exception {
            List<String> dbNames = dao.findAll().stream()
                    .map(Officer::getLast)
                    .collect(Collectors.toList());
            assertThat(dbNames, containsInAnyOrder("Kirk", "Picard", "Sisko", "Janeway", "Archer"));
        }

        @Test
        public void delete() throws Exception {
            IntStream.rangeClosed(1, 5)
                    .forEach(id -> {
                        Optional<Officer> officer = dao.findById(id);
                        assertTrue(officer.isPresent());
                        dao.delete(officer.get());
                    });
            assertEquals(0, dao.count());
        }

        @Test
        public void existsById() throws Exception {
            IntStream.rangeClosed(1, 5)
                    .forEach(id -> assertTrue(String.format("%d should exist", id), dao.existsById(id)));
        }
    }
}