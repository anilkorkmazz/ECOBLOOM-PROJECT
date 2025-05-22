package com.project.database.controller;

import com.project.database.api.BitkiYetismeKosullariApi;
import com.project.database.entity.BitkiYetismeKosullari;
import com.project.database.service.BitkiYetismeKosullariService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/bitki-yetisme-kosullari")
public class BitkiYetismeKosullariController implements BitkiYetismeKosullariApi {

    private final BitkiYetismeKosullariService bitkiYetismeKosullariService;

    @Override
    public ResponseEntity<Long> createBitkiYetismeKosullari(BitkiYetismeKosullari bitkiYetismeKosullari) {
        var savedBitkiYetismeKosullariId = bitkiYetismeKosullariService.createBitkiYetismeKosullari(bitkiYetismeKosullari);
        return ResponseEntity.ok(savedBitkiYetismeKosullariId);
    }

    @Override
    public ResponseEntity<Long> updateBitkiYetismeKosullari(BitkiYetismeKosullari bitkiYetismeKosullari) {
        var updatedBitkiYetismeKosullariId = bitkiYetismeKosullariService.updateBitkiYetismeKosullari(bitkiYetismeKosullari);
        return ResponseEntity.ok(updatedBitkiYetismeKosullariId);
    }

    @Override
    public ResponseEntity<BitkiYetismeKosullari> getBitkiYetismeKosullariById(Long id) {
        var bitkiYetismeKosullari = bitkiYetismeKosullariService.getBitkiYetismeKosullariById(id);
        return ResponseEntity.ok(bitkiYetismeKosullari);
    }

    @Override
    public ResponseEntity<Boolean> deleteBitkiYetismeKosullariById(Long id) {
        Boolean result = bitkiYetismeKosullariService.deleteBitkiYetismeKosullariById(id);
        return ResponseEntity.ok(result);
    }
}
