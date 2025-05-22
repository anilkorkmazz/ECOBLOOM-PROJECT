package com.project.ecobloom.repository;

import com.project.ecobloom.entity.Sehirler;
import jakarta.persistence.Tuple;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface KonumRepository extends JpaRepository<Sehirler, Long> {

    @Query("SELECT s.id FROM Sehirler s WHERE UPPER(s.sehir) = UPPER(:konum)")
    Long getSehirIdByKonum(String konum);

}
