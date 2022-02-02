package com.carrito.service;

import java.util.List;

import com.carrito.domain.Usuario;



public interface IUsuarioService {

	
	public List<Usuario> listarUsuarios();
	
	public Usuario guardar(Usuario usuario);
	
	public void elminar(Usuario usuario);
	
	public Usuario encontrarUsuario(Usuario usuario);
	
	public  Usuario fetchUserByUsernameAndPassword(String username, String password);

}
