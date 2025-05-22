package com.project.ecobloom.repository;

import com.project.ecobloom.entity.BitkiIsimleri;
import jakarta.persistence.Tuple;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BitkiIsimleriRepository extends JpaRepository<BitkiIsimleri, Long> {

    @Query("""
            SELECT
            bi.id,
            bi.bitkiIsim,
            byk.altSicaklik,
            byk.ustSicaklik,
            byk.bitkiYetismeSuresi
            FROM BitkiIsimleri bi
            INNER JOIN BitkiYetismeKosullari byk ON bi.id = byk.bitkiId
            WHERE byk.altSicaklik <= :altSicaklik
            AND byk.ustSicaklik >= :ustSicaklik
            """)
    List<Tuple> findBitkiIsimResponseBySicaklik(Float altSicaklik, Float ustSicaklik);

}
