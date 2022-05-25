package com.group5.IMDB.entities;

import lombok.Data;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "auditoriums")
@Data
public class Auditorium {

    @Id
    @GeneratedValue
    @Column(name = "auditorium_id", columnDefinition = "bigint")
    private Long auditoriumId;

    @Column(name = "auditorium_name", columnDefinition = "varchar(255)", nullable = false)
    private String auditoriumName;

    @Column(name = "available_seats", columnDefinition = "integer", nullable = false)
    private int availableSeats;

}