package com.project.ecobloom.api;

import com.project.ecobloom.request.HavaDurumuRequest;
import com.project.ecobloom.response.BitkiIsimResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface HavaDurumuApi {

    String PATH_GET_BITKI_ISIMLERI_LIST_BY_SICAKLIK = "/get-bitki-isimleri-list-by-sicaklik";

    @PostMapping(path = PATH_GET_BITKI_ISIMLERI_LIST_BY_SICAKLIK, produces = "application/json;charset=UTF-8")
    ResponseEntity<List<BitkiIsimResponse>> getBitkiIsimleriListBySicaklikResponseById(@RequestBody HavaDurumuRequest havaDurumuRequest);

}
