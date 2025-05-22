package com.project.ecobloom.repository;

import com.project.ecobloom.entity.SehirHavaDurumu;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HavaDurumuRepository extends JpaRepository<SehirHavaDurumu, Long> {

    List<SehirHavaDurumu> findBySehirIdOrderByTarih(Long sehirId);

}
