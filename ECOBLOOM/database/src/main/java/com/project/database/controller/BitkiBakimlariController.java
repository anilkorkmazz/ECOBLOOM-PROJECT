package com.project.database.controller;

import com.project.database.api.BitkiBakimlariApi;
import com.project.database.entity.BitkiBakimlari;
import com.project.database.service.BitkiBakimlariService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/bitki-bakimlari")
public class BitkiBakimlariController implements BitkiBakimlariApi {

    private final BitkiBakimlariService bitkiBakimlariService;

    @Override
    public ResponseEntity<Long> createBitkiBakimlari(BitkiBakimlari bitkiBakimlari) {
        var savedBitkiBakimId = bitkiBakimlariService.createBitkiBakimlari(bitkiBakimlari);
        return ResponseEntity.ok(savedBitkiBakimId);
    }

    @Override
    public ResponseEntity<Long> updateBitkiBakimlari(BitkiBakimlari bitkiBakimlari) {
        var updatedBitkiBakimId = bitkiBakimlariService.updateBitkiBakimlari(bitkiBakimlari);
        return ResponseEntity.ok(updatedBitkiBakimId);
    }

    @Override
    public ResponseEntity<BitkiBakimlari> getBitkiBakimlariById(Long id) {
        var bitkiBakim = bitkiBakimlariService.getBitkiBakimlariById(id);
        return ResponseEntity.ok(bitkiBakim);
    }

    @Override
    public ResponseEntity<Boolean> deleteBitkiBakimlariById(Long id) {
        Boolean result = bitkiBakimlariService.deleteBitkiBakimlariById(id);
        return ResponseEntity.ok(result);
    }
}
