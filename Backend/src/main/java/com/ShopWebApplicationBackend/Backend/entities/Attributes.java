package com.ShopWebApplicationBackend.Backend.entities;

import javax.persistence.*;

import com.ShopWebApplicationBackend.Backend.service.ProductService;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;


@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Attributes {


    @JsonIgnore
    @Id
    @GeneratedValue
    private Long id;

    private String color;

    private String format;

    @JsonIgnore
    @ManyToOne(fetch =  FetchType.LAZY)
    private Product product;


}
