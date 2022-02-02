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

import com.carrito.dao.IUsuario;
import com.carrito.domain.Producto;
import com.carrito.domain.Rol;
import com.carrito.domain.Usuario;
import com.carrito.exception.ResourceNotFoundException;
import com.carrito.service.RolServiceImpl;
import com.carrito.service.UsuarioServiceImpl;



@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200/")
public class ControladorUsuario {
	
	@Autowired
	private UsuarioServiceImpl userService;
	
	@Autowired
	private RolServiceImpl rolService;
	
	@Autowired IUsuario usuarioDao;
	
	@PostMapping("/usuarios/rol")
	public List<Rol> obtenerRol(@RequestBody Usuario usuario) {
	    Usuario user = userService.encontrarUsuario(usuario);
		return rolService.findByUsuario(user);
		
	}
		
	
	
	@PostMapping("/usuarios")
	public Usuario registerUser(@RequestBody Usuario usuario) {
		Usuario useTemp = userService.guardar(usuario);
		Rol rol = new Rol();
		rol.setRol("ROLE_USER");
		rol.setUser(usuario);
		rolService.guardar(rol);
		
		return useTemp;
	}
	
	@PostMapping("/login")
	public Usuario loginUser(@RequestBody Usuario user) throws Exception {
		String tempusername = user.getUsername();
		
		String temppassword = user.getPassword();
		
		Usuario userObj = null;
		
		if (tempusername != null && temppassword != null) {
			userObj = userService.fetchUserByUsernameAndPassword(tempusername, temppassword);
		}
		if(userObj== null) {
			throw new Exception("Bad credentials");
		}
		return userObj;
	}
	
	@GetMapping("/usuarios")
	public List<Usuario> listarTodosLosUsuarios(){
		return userService.listarUsuarios();
	}
	
	// metodo para buscar un producto por id 
		@GetMapping("/usuarios/{id}")
		public ResponseEntity<Usuario> obtenerEmpleadoPorId(@PathVariable Long id){
			Usuario usuario = usuarioDao.findById(id).orElseThrow(()-> new ResourceNotFoundException("No existe un empleado con ese ID: "+id));
			return ResponseEntity.ok(usuario);
		}
		
		@PutMapping("usuarios/{id}")
		public ResponseEntity<Usuario> actualizarUsuario(@PathVariable Long id, @RequestBody Usuario detallesUsuario){
			Usuario usuario = usuarioDao.findById(id).orElseThrow(()-> new ResourceNotFoundException("No existe un Usuario con ese ID: "+id));
			usuario.setNombre(detallesUsuario.getNombre());
			usuario.setApellido(detallesUsuario.getApellido());
			usuario.setEmail(detallesUsuario.getEmail());
			usuario.setTelefono(detallesUsuario.getTelefono());
			usuario.setUsername(detallesUsuario.getUsername());
			usuario.setPassword(detallesUsuario.getPassword());
			
			Usuario usuarioActualizado = usuarioDao.save(usuario);
			
			
			return ResponseEntity.ok(usuarioActualizado);
		}
		
		@DeleteMapping("/usuarios/{id}")  
		public ResponseEntity<Map<String, Boolean>> borrarUsuario(@PathVariable("id") Long id){  
			 Usuario usuario = usuarioDao.findById(id).orElseThrow(()-> new ResourceNotFoundException("No existe un usuario con ese ID: "+id));
		     usuarioDao.delete(usuario); 
		     Map<String, Boolean> respuesta = new HashMap<>();
		     respuesta.put("eliminar", Boolean.TRUE);
		     return ResponseEntity.ok(respuesta);
		}
	

}
