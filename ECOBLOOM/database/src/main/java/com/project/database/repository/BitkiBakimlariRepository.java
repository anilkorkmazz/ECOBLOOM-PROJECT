package com.project.database.repository;

import com.project.database.entity.BitkiBakimlari;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BitkiBakimlariRepository extends JpaRepository<BitkiBakimlari, Long> {

    Optional<BitkiBakimlari> findBitkiBakimById(Long id);

}
