package com.project.database.service;

import com.project.database.entity.BitkiYetismeKosullari;
import com.project.database.repository.BitkiYetismeKosullariRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class BitkiYetismeKosullariService {

    private final BitkiYetismeKosullariRepository bitkiYetismeKosullariRepository;

    public Long createBitkiYetismeKosullari(BitkiYetismeKosullari bitkiYetismeKosullari) {
        var savedBitkiHavaDurum = bitkiYetismeKosullariRepository.save(bitkiYetismeKosullari);
        return savedBitkiHavaDurum.getId();
    }

    public Long updateBitkiYetismeKosullari(BitkiYetismeKosullari bitkiYetismeKosullari) {
        Optional<BitkiYetismeKosullari> existingBitkiHavaDurum = bitkiYetismeKosullariRepository.findBitkiYetismeKosullariById(bitkiYetismeKosullari.getId());
        if (existingBitkiHavaDurum.isPresent()) {
            var updatedBitkiHavaDurum = bitkiYetismeKosullariRepository.save(bitkiYetismeKosullari);
            return updatedBitkiHavaDurum.getId();
        } else {
            throw new RuntimeException("Bitki Yetisme Kosulu bulunamadi");
        }
    }

    public BitkiYetismeKosullari getBitkiYetismeKosullariById(Long id) {
        Optional<BitkiYetismeKosullari> bitkiHavaDurum = bitkiYetismeKosullariRepository.findBitkiYetismeKosullariById(id);
        if (bitkiHavaDurum.isPresent()) {
            return bitkiHavaDurum.get();
        } else {
            throw new RuntimeException("Bitki Yetisme Kosulu bulunamadi");
        }
    }

    public Boolean deleteBitkiYetismeKosullariById(Long id) {
        Optional<BitkiYetismeKosullari> bitkiHavaDurum = bitkiYetismeKosullariRepository.findBitkiYetismeKosullariById(id);
        if (bitkiHavaDurum.isPresent()) {
            bitkiYetismeKosullariRepository.delete(bitkiHavaDurum.get());
            return Boolean.TRUE;
        } else {
            throw new RuntimeException("Bitki Yetisme Kosulu bulunamadi");
        }
    }

}
