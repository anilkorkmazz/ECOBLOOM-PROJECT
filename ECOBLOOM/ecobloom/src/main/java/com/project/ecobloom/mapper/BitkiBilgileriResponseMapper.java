package com.project.ecobloom.mapper;

import com.project.ecobloom.response.BitkiIsimResponse;
import com.project.ecobloom.response.YetismeTarihAraligiResponse;
import jakarta.persistence.Tuple;

import java.util.Collections;
import java.util.List;

public class BitkiBilgileriResponseMapper {

    public static List<BitkiIsimResponse> fromTupleToIsimResponse(List<Tuple> tuples) {
        return tuples.stream()
                .map(tuple -> new BitkiIsimResponse(
                        tuple.get(0, Long.class),         // id
                        tuple.get(1, String.class),       // bitkiIsim
                        tuple.get(2, Float.class),        // altSicaklik
                        tuple.get(3, Float.class),        // ustSicaklik
                        tuple.get(4, Integer.class)       // yetismeSuresi
                ))
                .toList();
    }
}