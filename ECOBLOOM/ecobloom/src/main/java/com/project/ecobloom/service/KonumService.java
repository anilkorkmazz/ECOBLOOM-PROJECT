package com.project.ecobloom.service;

import com.project.ecobloom.entity.BitkiIsimleri;
import com.project.ecobloom.entity.BitkiYetismeKosullari;
import com.project.ecobloom.entity.SehirHavaDurumu;
import com.project.ecobloom.repository.BitkiIsimleriRepository;
import com.project.ecobloom.repository.BitkiYetismeKosullariRepository;
import com.project.ecobloom.repository.HavaDurumuRepository;
import com.project.ecobloom.repository.KonumRepository;
import com.project.ecobloom.response.BitkiYetismeIsimResponse;
import com.project.ecobloom.response.YetismeTarihAraligiResponse;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class KonumService {

    private final KonumRepository konumRepository;
    private final HavaDurumuRepository havaDurumuRepository;
    private final BitkiIsimleriRepository bitkiIsimleriRepository;
    private final BitkiYetismeKosullariRepository bitkiYetismeKosullariRepository;

    public List<BitkiYetismeIsimResponse> getBitkiIsimleriListByKonum(String konum) {
        Long sehirId = konumRepository.getSehirIdByKonum(konum);
        List<SehirHavaDurumu> havaDurumuList = havaDurumuRepository.findBySehirIdOrderByTarih(sehirId);
        List<BitkiYetismeKosullari> yetismeKosullariList = bitkiYetismeKosullariRepository.findAll();
        Map<Long, BitkiIsimleri> bitkiIsimMap = bitkiIsimleriRepository.findAll()
                .stream()
                .collect(Collectors.toMap(BitkiIsimleri::getId, Function.identity()));

        List<BitkiYetismeIsimResponse> uygunBitkiler = new ArrayList<>();

        for (BitkiYetismeKosullari kosul : yetismeKosullariList) {
            List<YetismeTarihAraligiResponse> tarihAraliklari = uygunTarihAraliklariniBul(kosul, havaDurumuList);

            if (!tarihAraliklari.isEmpty()) {
                BitkiIsimleri bitki = bitkiIsimMap.get(kosul.getBitkiId());
                if (bitki != null) {
                    BitkiYetismeIsimResponse response = new BitkiYetismeIsimResponse(
                            bitki.getId(),
                            bitki.getBitkiIsim(),
                            kosul.getAltSicaklik(),
                            kosul.getUstSicaklik(),
                            kosul.getBitkiYetismeSuresi(),
                            tarihAraliklari
                    );
                    uygunBitkiler.add(response);
                }
            }
        }
        return uygunBitkiler;
    }

    private List<YetismeTarihAraligiResponse> uygunTarihAraliklariniBul(BitkiYetismeKosullari kosul, List<SehirHavaDurumu> havaDurumuList) {
        List<YetismeTarihAraligiResponse> araliklar = new ArrayList<>();
        int gerekliGun = kosul.getBitkiYetismeSuresi();

        for (int i = 0; i <= havaDurumuList.size() - gerekliGun; i++) {
            boolean uygun = true;

            for (int j = 0; j < gerekliGun; j++) {
                SehirHavaDurumu gunluk = havaDurumuList.get(i + j);
                if (gunluk.getTahminAltSicaklik() < kosul.getAltSicaklik() ||
                        gunluk.getTahminUstSicaklik() > kosul.getUstSicaklik()) {
                    uygun = false;
                    break;
                }
            }

            if (uygun) {
                LocalDateTime baslangic = havaDurumuList.get(i).getTarih();
                LocalDateTime bitis = havaDurumuList.get(i + gerekliGun - 1).getTarih();
                araliklar.add(new YetismeTarihAraligiResponse(baslangic, bitis));
                i = i + gerekliGun - 1;
            }
        }

        return araliklar;
    }
}