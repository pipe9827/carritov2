package com.carrito.service;

import java.util.List;
import java.util.Optional;

import com.carrito.domain.Rol;
import com.carrito.domain.Usuario;

public interface IRolService {
	
	
	public List<Rol> listarRoles();

	public Rol guardar(Rol rol);

	public void elminar(Rol rol);
	
	public List<Rol> findByUsuario(Usuario user);
	
	
}
