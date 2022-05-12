package edu.depaul.se452.enterprise.student;

import lombok.Data;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Students")
@Data
public class Student {
	@Id
	@GeneratedValue
	private long id;
	
	@Column(name = "stu_id")
	private String studentId;

	@Column(name = "nm")
	private String name;

	private String email;

	@Column(name="admitted_date")
	private Date admittedDate;

	
}