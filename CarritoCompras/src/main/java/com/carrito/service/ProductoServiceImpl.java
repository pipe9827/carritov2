package com.carrito.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.carrito.dao.IProducto;
import com.carrito.domain.Producto;
import com.carrito.domain.Usuario;
import com.carrito.exception.ResourceNotFoundException;

@Service
public class ProductoServiceImpl implements IProductoService{

	@Autowired
	private IProducto productoDao;

	@Override
	public List<Producto> listarProductos() {
		// TODO Auto-generated method stub
		return productoDao.findAll();
	}

	@Override
	public Producto guardar(Producto producto) {
		// TODO Auto-generated method stub
		return productoDao.save(producto);
	}

	@Override
	public void elminar(Producto producto) {
		// TODO Auto-generated method stub
		productoDao.delete(producto);
		
	}

	@Override
	public Producto encontrarProductoId(Long id) {
		// TODO Auto-generated method stub
		return productoDao.findById(id).get();
	}

	@Override
	public ResponseEntity<Producto> encontrarProductoPorId(Long id) {
			Producto empleado = productoDao.findById(id).orElseThrow(()-> new ResourceNotFoundException("No existe un producto con ese ID: "+id));
			return ResponseEntity.ok(empleado);
		
	}
	
	

}
