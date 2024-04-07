package com.ShopWebApplicationBackend.Backend.service;

import com.ShopWebApplicationBackend.Backend.dto.ProductDTO;
import com.ShopWebApplicationBackend.Backend.entities.Product;
import com.ShopWebApplicationBackend.Backend.mappers.ProductDataMapper;
import com.ShopWebApplicationBackend.Backend.repositories.ProductRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductDataMapper productDataMapper;


    public List<ProductDTO> getAllProducts(){

        return productDataMapper.ListProductToListProductDTO((List<Product>) productRepository.findAll());
    }
}
