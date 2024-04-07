package com.ShopWebApplicationBackend.Backend.controllers;


import com.ShopWebApplicationBackend.Backend.dto.ProductDTO;
import com.ShopWebApplicationBackend.Backend.entities.Product;
import com.ShopWebApplicationBackend.Backend.service.ProductService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/product", produces = MediaType.APPLICATION_JSON_VALUE)
@Slf4j
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/getAllProducts")
    public List<ProductDTO> getAllTasks() {
        List<ProductDTO> list = this.productService.getAllProducts();
        log.info("sending info");
        return list;
    }


}
