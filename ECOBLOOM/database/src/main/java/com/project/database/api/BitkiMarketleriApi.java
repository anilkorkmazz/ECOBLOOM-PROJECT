package com.project.database.api;

import com.project.database.entity.BitkiMarketleri;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

public interface BitkiMarketleriApi {

    String PATH_CREATE = "/create";
    String PATH_UPDATE = "/update";
    String PATH_GET_BITKI_MARKETLERI_BY_ID = "/get-bitki-marketleri-by-id/{id}";
    String PATH_DELETE = "/delete/{id}";

    @PostMapping(PATH_CREATE)
    ResponseEntity<Long> createBitkiMarketleri(@RequestBody BitkiMarketleri bitkiMarketleri);

    @PutMapping(PATH_UPDATE)
    ResponseEntity<Long> updateBitkiMarketleri(@RequestBody BitkiMarketleri bitkiMarketleri);

    @GetMapping(PATH_GET_BITKI_MARKETLERI_BY_ID)
    ResponseEntity<BitkiMarketleri> getBitkiMarketleriById(@PathVariable Long id);

    @DeleteMapping(PATH_DELETE)
    ResponseEntity<Boolean> deleteBitkiMarketleriById(@PathVariable Long id);

}
