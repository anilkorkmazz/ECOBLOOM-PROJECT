package com.project.database.repository;

import com.project.database.entity.BitkiMarketleri;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BitkiMarketleriRepository extends JpaRepository<BitkiMarketleri, Long> {

    Optional<BitkiMarketleri> findBitkiMarketById(Long id);

}
