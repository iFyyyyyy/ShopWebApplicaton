package com.ShopWebApplicationBackend.Backend.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AttributesDTO {
    private Long id;

    private String color;

    private String format;
}
