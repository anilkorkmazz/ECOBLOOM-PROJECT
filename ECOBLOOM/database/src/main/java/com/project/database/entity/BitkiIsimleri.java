package com.project.database.entity;

import jakarta.persistence.*;
import lombok.*;

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

    @Column(name = "BITKI_ISIM_STEMMED")
    private String bitkiIsimStemmed;

}
