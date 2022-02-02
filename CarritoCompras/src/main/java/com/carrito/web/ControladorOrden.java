package com.carrito.web;

import java.util.Iterator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.carrito.domain.Detalle;
import com.carrito.domain.Orden;
import com.carrito.domain.Peticion;
import com.carrito.domain.Producto;
import com.carrito.service.DetalleServiceImpl;
import com.carrito.service.OrdenServiceImpl;
import com.carrito.service.ProductoServiceImpl;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200/")
public class ControladorOrden {

	@Autowired
	private OrdenServiceImpl ordenService;

	@Autowired
	private DetalleServiceImpl detalleService;
	
	@Autowired
	private ProductoServiceImpl productoService;
	
	

	@PostMapping("/orden")
	public Orden guardarOrden(@RequestBody Orden orden) {
		return ordenService.guardar(orden);
	}

	@PostMapping("/orden/detalle")
	public Detalle guardarDetalle(@RequestBody Peticion peticion) {
		Orden ordenTemp = ordenService.encontrarOrdenPorId(peticion.getIdOrden()); 
		Producto proTemp = productoService.encontrarProductoId(peticion.getIdProducto());
		
		Detalle detalleTemp = new Detalle();
		detalleTemp.setCantidad(peticion.getCantidad());
		detalleTemp.setOrden(ordenTemp);
		detalleTemp.setProducto(proTemp);
		
		return detalleService.guardar(detalleTemp);
		
	}
}
