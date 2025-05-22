package com.project.database.api;

import com.project.database.entity.BitkiIsimleri;
import com.project.database.request.HavaDurumuRequest;
import com.project.database.response.BitkiBilgileriResponse;
import com.project.database.response.BitkiIsimResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public interface BitkiIsimleriApi {

    String PATH_CREATE = "/create";
    String PATH_UPDATE = "/update";
    String PATH_GET_BITKI_ISIMLERI_BY_ID = "/get-bitki-isimleri-by-id/{id}";
    String PATH_DELETE = "/delete/{id}";
    String PATH_GET_KAYIT_LIST = "/get-kayit-list/{id}";
    String PATH_GET_BITKI_ISIMLERI_LIST_BY_SICAKLIK = "/get-bitki-isimleri-list-by-sicaklik";

    @PostMapping(PATH_CREATE)
    ResponseEntity<Long> createBitkiIsimleri(@RequestBody BitkiIsimleri bitkiIsimleri);

    @PutMapping(PATH_UPDATE)
    ResponseEntity<Long> updateBitkiIsimleri(@RequestBody BitkiIsimleri bitkiIsimleri);

    @GetMapping(PATH_GET_BITKI_ISIMLERI_BY_ID)
    ResponseEntity<BitkiIsimleri> getBitkiIsimleriById(@PathVariable Long id);

    @DeleteMapping(PATH_DELETE)
    ResponseEntity<Boolean> deleteBitkiIsimleriById(@PathVariable Long id);

    @GetMapping(PATH_GET_KAYIT_LIST)
    ResponseEntity<BitkiBilgileriResponse> getBitkiBilgileriResponseById(@PathVariable Long id);

    @PostMapping(PATH_GET_BITKI_ISIMLERI_LIST_BY_SICAKLIK)
    ResponseEntity<List<BitkiIsimResponse>> getBitkiIsimleriListBySicaklikResponseById(@RequestBody HavaDurumuRequest havaDurumuRequest);

}
