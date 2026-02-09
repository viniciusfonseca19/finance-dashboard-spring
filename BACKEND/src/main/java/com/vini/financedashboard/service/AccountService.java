package com.vini.financedashboard.service;

import com.vini.financedashboard.domain.Account;
import com.vini.financedashboard.repository.AccountRepository;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
public class AccountService {

    private final AccountRepository accountRepository;

    public AccountService(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    public Account updateBalance(Long accountId, BigDecimal newBalance) {

        Account account = accountRepository.findById(accountId)
                .orElseThrow(() -> new RuntimeException("Conta não encontrada"));

        account.setBalance(newBalance);

        return accountRepository.save(account);
    }
}
