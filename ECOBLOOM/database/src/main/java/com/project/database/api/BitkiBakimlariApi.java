package com.project.database.api;

import com.project.database.entity.BitkiBakimlari;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

public interface BitkiBakimlariApi {

    String PATH_CREATE = "/create";
    String PATH_UPDATE = "/update";
    String PATH_GET_BITKI_BAKIMLARI_BY_ID = "/get-bitki-bakimlari-by-id/{id}";
    String PATH_DELETE = "/delete/{id}";

    @PostMapping(PATH_CREATE)
    ResponseEntity<Long> createBitkiBakimlari(@RequestBody BitkiBakimlari bitkiBakimlari);

    @PutMapping(PATH_UPDATE)
    ResponseEntity<Long> updateBitkiBakimlari(@RequestBody BitkiBakimlari bitkiBakimlari);

    @GetMapping(PATH_GET_BITKI_BAKIMLARI_BY_ID)
    ResponseEntity<BitkiBakimlari> getBitkiBakimlariById(@PathVariable Long id);

    @DeleteMapping(PATH_DELETE)
    ResponseEntity<Boolean> deleteBitkiBakimlariById(@PathVariable Long id);

}
