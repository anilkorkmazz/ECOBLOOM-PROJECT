package com.project.database.controller;

import com.project.database.api.BitkiIsimleriApi;
import com.project.database.entity.BitkiIsimleri;
import com.project.database.request.HavaDurumuRequest;
import com.project.database.response.BitkiBilgileriResponse;
import com.project.database.response.BitkiIsimResponse;
import com.project.database.service.BitkiIsimleriService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/bitki-isimleri")
public class BitkiIsimleriController implements BitkiIsimleriApi {

    private final BitkiIsimleriService bitkiIsimleriService;

    @Override
    public ResponseEntity<Long> createBitkiIsimleri(BitkiIsimleri bitkiIsimleri) {
        var savedBitkiId = bitkiIsimleriService.createBitkiIsimleri(bitkiIsimleri);
        return ResponseEntity.ok(savedBitkiId);
    }

    @Override
    public ResponseEntity<Long> updateBitkiIsimleri(BitkiIsimleri bitkiIsimleri) {
        var updatedBitkiId = bitkiIsimleriService.updateBitkiIsimleri(bitkiIsimleri);
        return ResponseEntity.ok(updatedBitkiId);
    }

    @Override
    public ResponseEntity<BitkiIsimleri> getBitkiIsimleriById(Long id) {
        var bitki = bitkiIsimleriService.getBitkiIsimleriById(id);
        return ResponseEntity.ok(bitki);
    }

    @Override
    public ResponseEntity<Boolean> deleteBitkiIsimleriById(Long id) {
        Boolean result = bitkiIsimleriService.deleteBitkiIsimleriById(id);
        return ResponseEntity.ok(result);
    }

    @Override
    public ResponseEntity<BitkiBilgileriResponse> getBitkiBilgileriResponseById(Long id) {
        var bitkiBilgiResponse = bitkiIsimleriService.getBitkiBilgileriResponseById(id);
        return ResponseEntity.ok(bitkiBilgiResponse);
    }

    @Override
    public ResponseEntity<List<BitkiIsimResponse>> getBitkiIsimleriListBySicaklikResponseById(HavaDurumuRequest havaDurumuRequest) {
        List<BitkiIsimResponse> bitkiler =
                bitkiIsimleriService.getBitkiIsimleriListBySicaklikResponseById(havaDurumuRequest);

        return ResponseEntity.ok(bitkiler);
    }
}
