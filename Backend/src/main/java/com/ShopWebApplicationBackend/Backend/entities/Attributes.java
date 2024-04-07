package com.ShopWebApplicationBackend.Backend.entities;

import javax.persistence.*;
import lombok.*;


@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Attributes {

    @Id
    @GeneratedValue
    private Long id;

    private String color;

    private String format;


}
