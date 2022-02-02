package com.carrito.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.carrito.domain.Producto;

public interface IProductoService {

	public List<Producto> listarProductos();

	public Producto guardar(Producto producto);

	public void elminar(Producto producto);

	public Producto encontrarProductoId(Long id);
	
	public ResponseEntity<Producto> encontrarProductoPorId(Long id);
}
