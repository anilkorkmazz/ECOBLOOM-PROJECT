package com.project.ecobloom.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@IdClass(SehirHavaDurumuId.class)
@Entity
@Table(name = "SEHIR_HAVA_DURUMU")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class SehirHavaDurumu {

    @Id
    @Column(name = "SEHIR_ID")
    private Long sehirId;

    @Id
    @Column(name = "TARIH")
    private LocalDateTime tarih;

    @Column(name = "TAHMIN_ALT_SICAKLIK")
    private Float tahminAltSicaklik;

    @Column(name = "TAHMIN_UST_SICAKLIK")
    private Float tahminUstSicaklik;
}

