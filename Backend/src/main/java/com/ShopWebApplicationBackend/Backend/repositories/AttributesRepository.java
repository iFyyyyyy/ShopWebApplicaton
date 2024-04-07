package com.ShopWebApplicationBackend.Backend.repositories;

import com.ShopWebApplicationBackend.Backend.entities.Attributes;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AttributesRepository extends CrudRepository<Attributes, Long> {

}
