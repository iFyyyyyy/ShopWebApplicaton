package com.ShopWebApplicationBackend.Backend.repositories;

import com.ShopWebApplicationBackend.Backend.entities.Product;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductRepository extends CrudRepository<Product, Long> {

    @Query("SELECT p FROM Product p")
    List<Product> getAllBoards();
}
