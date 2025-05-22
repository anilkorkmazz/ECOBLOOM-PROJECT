package com.project.database.api;

import com.project.database.entity.BitkiYetismeKosullari;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

public interface BitkiYetismeKosullariApi {

    String PATH_CREATE = "/create";
    String PATH_UPDATE = "/update";
    String PATH_GET_BITKI_YETISME_KOSULLARI_BY_ID = "/get-bitki-yetisme-kosullari-by-id/{id}";
    String PATH_DELETE = "/delete/{id}";

    @PostMapping(PATH_CREATE)
    ResponseEntity<Long> createBitkiYetismeKosullari(@RequestBody BitkiYetismeKosullari bitkiYetismeKosullari);

    @PutMapping(PATH_UPDATE)
    ResponseEntity<Long> updateBitkiYetismeKosullari(@RequestBody BitkiYetismeKosullari bitkiYetismeKosullari);

    @GetMapping(PATH_GET_BITKI_YETISME_KOSULLARI_BY_ID)
    ResponseEntity<BitkiYetismeKosullari> getBitkiYetismeKosullariById(@PathVariable Long id);

    @DeleteMapping(PATH_DELETE)
    ResponseEntity<Boolean> deleteBitkiYetismeKosullariById(@PathVariable Long id);

}
