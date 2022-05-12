package edu.depaul.se452.enterprise.student;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentService {
    @Autowired
    private StudentRepository repo;

    public List<Student> findAll() {
        return repo.findAll();
    }

    public Student find(long id) {
        return repo.findById(id).orElse(new Student());
    }

    public void save(Student student) {
        repo.save(student);
    }

    public void delete(long id) {
        Student student = repo.findById(id).orElse(new Student());
        if (student.getId() > 0) {
            repo.delete(student); 
        }       
    }

}
