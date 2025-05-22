package com.project.ecobloom.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "BITKI_ISIMLERI")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class BitkiIsimleri {

    @Id
    @Column(name = "ID")
    private Long id;

    @Column(name = "BITKI_ISIM")
    private String bitkiIsim;

}

