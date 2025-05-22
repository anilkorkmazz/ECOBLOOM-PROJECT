package com.project.database.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BitkiBilgileriResponse {

    private Long id;
    private String bitkiIsim;
    private String bitkiIsimStemmed;
    private String bitkiBakim;
    private String bitkiMarket;
    private Float altSicaklik;
    private Float ustSicaklik;
    private Integer bitkiYetismeSuresi;
}
