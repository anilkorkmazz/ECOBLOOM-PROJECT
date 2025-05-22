package com.project.database.controller;

import com.project.database.api.BitkiMarketleriApi;
import com.project.database.entity.BitkiMarketleri;
import com.project.database.service.BitkiMarketleriService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/bitki-marketleri")
public class BitkiMarketleriController implements BitkiMarketleriApi {

    private final BitkiMarketleriService bitkiMarketleriService;

    @Override
    public ResponseEntity<Long> createBitkiMarketleri(BitkiMarketleri bitkiMarketleri) {
        var savedBitkiMarketId = bitkiMarketleriService.createBitkiMarketleri(bitkiMarketleri);
        return ResponseEntity.ok(savedBitkiMarketId);
    }

    @Override
    public ResponseEntity<Long> updateBitkiMarketleri(BitkiMarketleri bitkiMarketleri) {
        var updatedBitkiMarketId = bitkiMarketleriService.updateBitkiMarketleri(bitkiMarketleri);
        return ResponseEntity.ok(updatedBitkiMarketId);
    }

    @Override
    public ResponseEntity<BitkiMarketleri> getBitkiMarketleriById(Long id) {
        var bitkiMarket = bitkiMarketleriService.getBitkiMarketleriById(id);
        return ResponseEntity.ok(bitkiMarket);
    }

    @Override
    public ResponseEntity<Boolean> deleteBitkiMarketleriById(Long id) {
        Boolean result = bitkiMarketleriService.deleteBitkiMarketleriById(id);
        return ResponseEntity.ok(result);
    }
}
