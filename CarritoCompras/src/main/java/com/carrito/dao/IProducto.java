package com.carrito.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.carrito.domain.Producto;

public interface IProducto extends JpaRepository<Producto, Long>{
	
}
