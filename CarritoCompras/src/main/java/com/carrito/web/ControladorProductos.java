package com.carrito.web;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.carrito.dao.IProducto;
import com.carrito.domain.Producto;
import com.carrito.exception.ResourceNotFoundException;
import com.carrito.service.ProductoServiceImpl;


@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200/")
public class ControladorProductos {

	@Autowired
	private ProductoServiceImpl productoServicio;
	
	@Autowired
	private IProducto productoDao;
	
	@GetMapping("/producto")
	public List<Producto> listarTodosLosProductos(){
		return productoServicio.listarProductos();
	}
	
	@PostMapping("/producto")
	public Producto guardarproProducto(@RequestBody Producto producto){
		return productoServicio.guardar(producto);
	}
	
	// metodo para buscar un producto por id 
	@GetMapping("/producto/{id}")
	public ResponseEntity<Producto> obtenerproductoPorId(@PathVariable Long id){
		ResponseEntity<Producto> producto = productoServicio.encontrarProductoPorId(id);
		return producto;
	}
	
	@PutMapping("producto/{id}")
	public ResponseEntity<Producto> actualizarProducto(@PathVariable Long id, @RequestBody Producto detallesProducto){
		Producto producto = productoDao.findById(id).orElseThrow(()-> new ResourceNotFoundException("No existe un producto con ese ID: "+id));
		producto.setNombre(detallesProducto.getNombre());
		producto.setDescripcion(detallesProducto.getDescripcion());
		producto.setPrecio(detallesProducto.getPrecio());
		
		Producto empleadoActualizado = productoDao.save(producto);
		
		
		return ResponseEntity.ok(empleadoActualizado);
	}
	
	@DeleteMapping("/producto/{id}")  
	public ResponseEntity<Map<String, Boolean>> borrarUsuario(@PathVariable("id") Long id){  
		Producto empleado = productoDao.findById(id).orElseThrow(()-> new ResourceNotFoundException("No existe un producto con ese ID: "+id));
	     productoDao.delete(empleado); 
	     Map<String, Boolean> respuesta = new HashMap<>();
	     respuesta.put("eliminar", Boolean.TRUE);
	     return ResponseEntity.ok(respuesta);
	}
}
