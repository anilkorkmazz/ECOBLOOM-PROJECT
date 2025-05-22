package com.project.ecobloom.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "SEHIRLER")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Sehirler {

    @Id
    @Column(name = "ID")
    private Long id;

    @Column(name = "SEHIR")
    private String sehir;

}

