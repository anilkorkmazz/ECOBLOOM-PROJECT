package com.project.ecobloom.controller;

import com.project.ecobloom.api.HavaDurumuApi;
import com.project.ecobloom.request.HavaDurumuRequest;
import com.project.ecobloom.response.BitkiIsimResponse;
import com.project.ecobloom.service.HavaDurumuService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/bitki-isimleri")
public class HavaDurumuController implements HavaDurumuApi {

    private final HavaDurumuService havaDurumuService;

    @Override
    public ResponseEntity<List<BitkiIsimResponse>> getBitkiIsimleriListBySicaklikResponseById(HavaDurumuRequest havaDurumuRequest) {
        List<BitkiIsimResponse> bitkiler =
                havaDurumuService.getBitkiIsimleriListBySicaklikResponseById(havaDurumuRequest);

        return ResponseEntity.ok(bitkiler);
    }

}
