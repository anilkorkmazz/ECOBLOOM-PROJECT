package com.project.ecobloom.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BitkiYetismeIsimResponse {

    private Long id;
    private String bitkiIsim;
    private Float altSicaklik;
    private Float ustSicaklik;
    private Integer yetismeSuresi;
    private List<YetismeTarihAraligiResponse> yetismeTarihleri;
}
