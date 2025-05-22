package com.project.ecobloom.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SehirHavaDurumuId implements Serializable {
    private Long sehirId;
    private LocalDateTime tarih;
}
