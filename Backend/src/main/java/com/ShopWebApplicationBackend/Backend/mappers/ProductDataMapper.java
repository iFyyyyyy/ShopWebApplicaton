package com.ShopWebApplicationBackend.Backend.mappers;


import com.ShopWebApplicationBackend.Backend.dto.ProductDTO;
import com.ShopWebApplicationBackend.Backend.entities.Product;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ProductDataMapper {

    ProductDataMapper INSTANCE = Mappers.getMapper(ProductDataMapper.class);

    ProductDTO ProductToProductDTO (Product product);

    List<ProductDTO> ListProductToListProductDTO(List<Product> products);
}
