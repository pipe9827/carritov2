package com.carrito.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.carrito.domain.Usuario;

public interface IUsuario extends JpaRepository<Usuario, Long>{
	public Usuario findByUsernameAndPassword(String username, String password);
}
