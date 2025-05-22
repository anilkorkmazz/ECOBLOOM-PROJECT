package com.project.database.repository;

import com.project.database.entity.BitkiYetismeKosullari;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BitkiYetismeKosullariRepository extends JpaRepository<BitkiYetismeKosullari, Long> {

    Optional<BitkiYetismeKosullari> findBitkiYetismeKosullariById(Long id);

}
