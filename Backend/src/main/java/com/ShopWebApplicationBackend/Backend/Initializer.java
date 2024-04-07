package com.ShopWebApplicationBackend.Backend;

import com.ShopWebApplicationBackend.Backend.entities.Attributes;
import com.ShopWebApplicationBackend.Backend.entities.Product;
import com.ShopWebApplicationBackend.Backend.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;



public class Initializer {
    @Autowired
    private ProductRepository productRepository;

    public void initial(){
        productRepository.save(new Product(
                1L,
                "бумага",
                new Attributes(
                        1L,
                        "белый",
                        "A4"
                )
        ));

}
}

