package com.project.ecobloom.api;

import com.project.ecobloom.response.BitkiYetismeIsimResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

public interface KonumApi {

    String PATH_GET_BITKI_ISIMLERI_LIST_BY_KONUM = "/get-bitki-isimleri-list-by-konum";

    @GetMapping(PATH_GET_BITKI_ISIMLERI_LIST_BY_KONUM)
    ResponseEntity<List<BitkiYetismeIsimResponse>> getBitkiIsimleriListByKonum(@RequestParam String konum);

}
