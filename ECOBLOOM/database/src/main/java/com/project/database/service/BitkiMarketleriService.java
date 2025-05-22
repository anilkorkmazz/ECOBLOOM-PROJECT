package com.project.database.service;

import com.project.database.entity.BitkiMarketleri;
import com.project.database.repository.BitkiMarketleriRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class BitkiMarketleriService {

    private final BitkiMarketleriRepository bitkiMarketleriRepository;

    public Long createBitkiMarketleri(BitkiMarketleri bitkiMarketleri) {
        var savedBitkiMarket = bitkiMarketleriRepository.save(bitkiMarketleri);
        return savedBitkiMarket.getId();
    }

    public Long updateBitkiMarketleri(BitkiMarketleri bitkiMarketleri) {
        Optional<BitkiMarketleri> existingBitkiMarket = bitkiMarketleriRepository.findBitkiMarketById(bitkiMarketleri.getId());
        if (existingBitkiMarket.isPresent()) {
            var updatedBitkiMarket = bitkiMarketleriRepository.save(bitkiMarketleri);
            return updatedBitkiMarket.getId();
        } else {
            throw new RuntimeException("Bitki Market bulunamadi");
        }
    }

    public BitkiMarketleri getBitkiMarketleriById(Long id) {
        Optional<BitkiMarketleri> bitkiMatrket = bitkiMarketleriRepository.findBitkiMarketById(id);
        if (bitkiMatrket.isPresent()) {
            return bitkiMatrket.get();
        } else {
            throw new RuntimeException("Bitki Market bulunamadi");
        }
    }

    public Boolean deleteBitkiMarketleriById(Long id) {
        Optional<BitkiMarketleri> bitkiMarket = bitkiMarketleriRepository.findBitkiMarketById(id);
        if (bitkiMarket.isPresent()) {
            bitkiMarketleriRepository.delete(bitkiMarket.get());
            return Boolean.TRUE;
        } else {
            throw new RuntimeException("Bitki Market bulunamadi");
        }
    }

}
