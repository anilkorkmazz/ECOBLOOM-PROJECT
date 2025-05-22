package com.project.database.mapper;

import com.project.database.response.BitkiBilgileriResponse;
import com.project.database.response.BitkiIsimResponse;
import jakarta.persistence.Tuple;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class BitkiBilgileriResponseMapper {

    public static Optional<BitkiBilgileriResponse> fromTupleToResponse(Optional<Tuple> tupleOpt) {
        return tupleOpt.map(tuple -> new BitkiBilgileriResponse(
                tuple.get(0, Long.class),
                tuple.get(1, String.class),
                tuple.get(2, String.class),
                tuple.get(3, String.class),
                tuple.get(4, String.class),
                tuple.get(5, Float.class),
                tuple.get(6, Float.class),
                tuple.get(7, Integer.class)
        ));
    }

    public static List<BitkiIsimResponse> fromTupleToIsimResponse(List<Tuple> tuples) {
        return tuples.stream()
                .map(tuple -> new BitkiIsimResponse(
                        tuple.get(0, Long.class),
                        tuple.get(1, String.class)
                ))
                .toList();
    }



}
