package com.project.database.repository;

import com.project.database.entity.BitkiIsimleri;
import jakarta.persistence.Tuple;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface BitkiIsimleriRepository extends JpaRepository<BitkiIsimleri, Long> {

    Optional<BitkiIsimleri> findById(Long id);

    @Query("""
            SELECT
            bi.id,
            bi.bitkiIsim,
            bi.bitkiIsimStemmed,
            bb.bitkiBakim,
            bm.bitkiMarket,
            bhd.altSicaklik,
            bhd.ustSicaklik,
            bhd.bitkiYetismeSuresi
            FROM BitkiIsimleri bi
            INNER JOIN BitkiBakimlari bb ON bi.id = bb.bitkiId
            INNER JOIN BitkiMarketleri bm ON bi.id = bm.bitkiId
            INNER JOIN BitkiYetismeKosullari bhd ON bi.id = bhd.bitkiId
            WHERE bi.id = :id
            """)
    Optional<Tuple> findBitkiBilgileriResponseById(Long id);

    @Query("""
            SELECT bi.id,
            bi.bitkiIsim
            FROM BitkiIsimleri bi
            INNER JOIN BitkiYetismeKosullari bhd ON bi.id = bhd.bitkiId
            WHERE bhd.altSicaklik <= :altSicaklik
            AND bhd.ustSicaklik >= :ustSicaklik
            """)
    List<Tuple> findBitkiIsimResponseBySicaklik(Float altSicaklik, Float ustSicaklik);

}
