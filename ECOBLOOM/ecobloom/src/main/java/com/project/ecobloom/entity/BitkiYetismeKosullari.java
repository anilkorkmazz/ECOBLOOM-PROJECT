package com.project.ecobloom.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "BITKI_YETISME_KOSULLARI")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class BitkiYetismeKosullari {

    @Id
    @Column(name = "ID")
    private Long id;

    @Column(name = "BITKI_ID")
    private Long bitkiId;

    @Column(name = "ALT_SICAKLIK")
    private Float altSicaklik;

    @Column(name = "UST_SICAKLIK")
    private Float ustSicaklik;

    @Column(name = "BITKI_YETISME_SURESI")
    private Integer bitkiYetismeSuresi;
}

