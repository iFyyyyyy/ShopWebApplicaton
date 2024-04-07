package com.ShopWebApplicationBackend.Backend.entities;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name = "customers")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Customer {


    @Id
    @GeneratedValue
    private Long id;

    private String name;

    private String phoneNumber;
    
    private String snils;

}
