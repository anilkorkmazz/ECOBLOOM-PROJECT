package com.project.database.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "BITKI_MARKETLERI")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class BitkiMarketleri {

    @Id
    @Column(name = "ID")
    private Long id;

    @Column(name = "BITKI_ID")
    private Long bitkiId;

    @Column(name = "BITKI_MARKET")
    private String bitkiMarket;

}
