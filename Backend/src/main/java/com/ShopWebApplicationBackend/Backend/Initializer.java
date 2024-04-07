package com.ShopWebApplicationBackend.Backend;

import com.ShopWebApplicationBackend.Backend.entities.Attributes;
import com.ShopWebApplicationBackend.Backend.entities.Product;
import com.ShopWebApplicationBackend.Backend.repositories.AttributesRepository;
import com.ShopWebApplicationBackend.Backend.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component
public class Initializer {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private AttributesRepository attributesRepository;

    public void initial(){
        productRepository.save(new Product(
                1L,
                "бумага",
                1000L,
                null
        ));

        productRepository.save(new Product(
                2L,
                "бумага",
                2000L,
                null
        ));

        attributesRepository.save(new Attributes(
                1L,
                "белый",
                "A4",
                productRepository.findById(1L).get()
        ));

        attributesRepository.save(new Attributes(
                2L,
                "белый",
                "A3",
                productRepository.findById(2L).get()
        ));



}
}

