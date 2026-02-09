package com.vini.financedashboard.controller;

import com.vini.financedashboard.domain.Account;
import com.vini.financedashboard.service.AccountService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;

@RestController
@RequestMapping("/accounts")
public class AccountController {

    private final AccountService accountService;

    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @PutMapping("/{id}/balance")
    public ResponseEntity<Account> updateBalance(
            @PathVariable Long id,
            @RequestParam BigDecimal balance
    ) {
        Account updated = accountService.updateBalance(id, balance);
        return ResponseEntity.ok(updated);
    }
}
