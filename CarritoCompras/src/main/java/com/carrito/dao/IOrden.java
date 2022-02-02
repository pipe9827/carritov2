package com.carrito.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.carrito.domain.Orden;

public interface IOrden extends JpaRepository<Orden, Long>{
	
}
