package com.vini.financedashboard.repository;

import com.vini.financedashboard.domain.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, Long> {
}
