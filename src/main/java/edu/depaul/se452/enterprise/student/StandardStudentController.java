package edu.depaul.se452.enterprise.student;

import javax.validation.Valid;

import java.util.List;
import java.util.logging.Level;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.extern.java.Log;

@Controller
@RequestMapping("/students")
@Log
public class StandardStudentController {
    @Autowired
    private StudentService service;
    
    @GetMapping("/")
    public String list(Model model) {
        List<Student> students = service.findAll();
        model.addAttribute("students", students);
        log.log(Level.SEVERE, students.toString());
        return "students/list";
    }

    @PostMapping("/add")
    public String add(@Valid Student student, BindingResult result, Model model) {
        if(result.hasErrors()) {
            return "students/edit";
        }

        service.save(student);
        return "redirect:/students";
    }

    @GetMapping("/add")
    public String add(Student student, Model model) {
        model.addAttribute("student", student);
        return "students/edit";
    }


    @GetMapping("/delete/{id}")
    public String delete(@PathVariable("id") Long id) {
        service.delete(id);
        return "redirect:/students/";
    }

    @GetMapping("/edit/{id}")
    public String getOne(@PathVariable("id") Long id, Model model) {
        Student student = service.find(id);
        model.addAttribute("student", student);
        return "students/edit";
    }

    @PostMapping("/edit/{id}")
    public String updateOne(@PathVariable("id") Long id, @Valid Student student, BindingResult result, Model model) {
        if (result.hasErrors()) {
            student.setId(id);
            return "students/edit";
        }
        service.save(student);
        return "redirect:/students/";
    }

    
}
