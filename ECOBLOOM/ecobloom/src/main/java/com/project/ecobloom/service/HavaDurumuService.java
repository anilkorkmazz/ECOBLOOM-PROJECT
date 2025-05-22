package com.project.ecobloom.service;

import com.project.ecobloom.mapper.BitkiBilgileriResponseMapper;
import com.project.ecobloom.repository.BitkiIsimleriRepository;
import com.project.ecobloom.request.HavaDurumuRequest;
import com.project.ecobloom.response.BitkiIsimResponse;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class HavaDurumuService {

    private final BitkiIsimleriRepository bitkiIsimleriRepository;

    public List<BitkiIsimResponse> getBitkiIsimleriListBySicaklikResponseById(HavaDurumuRequest havaDurumuRequest) {
        return BitkiBilgileriResponseMapper
                .fromTupleToIsimResponse(bitkiIsimleriRepository.findBitkiIsimResponseBySicaklik(
                        havaDurumuRequest.getAltSicaklik(),
                        havaDurumuRequest.getUstSicaklik()));
    }
}
