package com.project.ecobloom.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class YetismeTarihAraligiResponse {

    private LocalDateTime baslangic;
    private LocalDateTime bitis;
}
