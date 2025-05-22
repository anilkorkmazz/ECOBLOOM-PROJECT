package com.project.database.service;

import com.project.database.entity.BitkiIsimleri;
import com.project.database.mapper.BitkiBilgileriResponseMapper;
import com.project.database.repository.BitkiIsimleriRepository;
import com.project.database.request.HavaDurumuRequest;
import com.project.database.response.BitkiBilgileriResponse;
import com.project.database.response.BitkiIsimResponse;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class BitkiIsimleriService {

    private final BitkiIsimleriRepository bitkiIsimleriRepository;

    public Long createBitkiIsimleri(BitkiIsimleri bitkiIsimleri) {
        var savedBitki = bitkiIsimleriRepository.save(bitkiIsimleri);
        return savedBitki.getId();
    }

    public Long updateBitkiIsimleri(BitkiIsimleri bitkiIsimleri) {
        Optional<BitkiIsimleri> existingBitki = bitkiIsimleriRepository.findById(bitkiIsimleri.getId());
        if (existingBitki.isPresent()) {
            var updatedBitki = bitkiIsimleriRepository.save(bitkiIsimleri);
            return updatedBitki.getId();
        } else {
            throw new RuntimeException("Bitki bulunamadi");
        }
    }

    public BitkiIsimleri getBitkiIsimleriById(Long id) {
        Optional<BitkiIsimleri> bitki = bitkiIsimleriRepository.findById(id);
        if (bitki.isPresent()) {
            return bitki.get();
        } else {
            throw new RuntimeException("Bitki bulunamadi");
        }
    }

    public Boolean deleteBitkiIsimleriById(Long id) {
        Optional<BitkiIsimleri> bitki = bitkiIsimleriRepository.findById(id);
        if (bitki.isPresent()) {
            bitkiIsimleriRepository.delete(bitki.get());
            return Boolean.TRUE;
        } else {
            throw new RuntimeException("Bitki bulunamadi");
        }
    }

    public BitkiBilgileriResponse getBitkiBilgileriResponseById(Long id) {
        return BitkiBilgileriResponseMapper
                .fromTupleToResponse(bitkiIsimleriRepository.findBitkiBilgileriResponseById(id))
                .orElseThrow(() -> new RuntimeException("Bitki bulunamadi"));
    }

    public List<BitkiIsimResponse> getBitkiIsimleriListBySicaklikResponseById(HavaDurumuRequest havaDurumuRequest) {
        return BitkiBilgileriResponseMapper
                .fromTupleToIsimResponse(bitkiIsimleriRepository.findBitkiIsimResponseBySicaklik(
                        havaDurumuRequest.getAltSicaklik(),
                        havaDurumuRequest.getUstSicaklik()));
    }
}
