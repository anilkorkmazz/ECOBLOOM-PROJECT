package com.project.database.service;

import com.project.database.entity.BitkiBakimlari;
import com.project.database.repository.BitkiBakimlariRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class BitkiBakimlariService {

    private final BitkiBakimlariRepository bitkiBakimlariRepository;

    public Long createBitkiBakimlari(BitkiBakimlari bitkiBakimlari) {
        var savedBitkiBakim = bitkiBakimlariRepository.save(bitkiBakimlari);
        return savedBitkiBakim.getId();
    }

    public Long updateBitkiBakimlari(BitkiBakimlari bitkiBakimlari) {
        Optional<BitkiBakimlari> existingBitkiBakim = bitkiBakimlariRepository.findBitkiBakimById(bitkiBakimlari.getId());
        if (existingBitkiBakim.isPresent()) {
            var updatedBitkiBakim = bitkiBakimlariRepository.save(bitkiBakimlari);
            return updatedBitkiBakim.getId();
        } else {
            throw new RuntimeException("Bitki Bakim bulunamadi");
        }
    }

    public BitkiBakimlari getBitkiBakimlariById(Long id) {
        Optional<BitkiBakimlari> bitkiBakim = bitkiBakimlariRepository.findBitkiBakimById(id);
        if (bitkiBakim.isPresent()) {
            return bitkiBakim.get();
        } else {
            throw new RuntimeException("Bitki Bakim bulunamadi");
        }
    }

    public Boolean deleteBitkiBakimlariById(Long id) {
        Optional<BitkiBakimlari> bitkiBakim = bitkiBakimlariRepository.findBitkiBakimById(id);
        if (bitkiBakim.isPresent()) {
            bitkiBakimlariRepository.delete(bitkiBakim.get());
            return Boolean.TRUE;
        } else {
            throw new RuntimeException("Bitki Bakim bulunamadi");
        }
    }

}
