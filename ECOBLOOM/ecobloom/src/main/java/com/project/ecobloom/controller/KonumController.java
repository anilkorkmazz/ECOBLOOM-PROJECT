package com.project.ecobloom.controller;

import com.project.ecobloom.api.KonumApi;
import com.project.ecobloom.response.BitkiIsimResponse;
import com.project.ecobloom.response.BitkiYetismeIsimResponse;
import com.project.ecobloom.service.KonumService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/bitki-isimleri")
public class KonumController implements KonumApi {

    private final KonumService konumService;

    @Override
    public ResponseEntity<List<BitkiYetismeIsimResponse>> getBitkiIsimleriListByKonum(String konum) {
        List<BitkiYetismeIsimResponse> bitkiler = konumService.getBitkiIsimleriListByKonum(konum);
        return ResponseEntity.ok(bitkiler);
    }
}
