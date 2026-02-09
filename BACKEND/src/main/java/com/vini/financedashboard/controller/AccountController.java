package com.vini.financedashboard.controller;

import com.vini.financedashboard.service.AccountService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/accounts")
public class AccountController {

    private final AccountService accountService;

    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @PutMapping("/{id}/balance")
    public ResponseEntity<Void> updateBalance(
            @PathVariable Long id,
            @RequestParam Double balance
    ) {
        accountService.updateBalance(id, balance);
        return ResponseEntity.noContent().build();
    }
}
