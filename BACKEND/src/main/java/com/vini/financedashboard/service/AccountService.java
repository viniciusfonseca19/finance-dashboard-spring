package com.vini.financedashboard.service;

import org.springframework.stereotype.Service;

@Service
public class AccountService {

    public void updateBalance(Long id, Double balance) {
        // por enquanto só um placeholder
        // depois a gente liga no banco
        System.out.println("Atualizando conta " + id + " para saldo " + balance);
    }
}
