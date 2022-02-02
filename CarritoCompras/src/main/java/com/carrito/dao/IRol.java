package com.carrito.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.carrito.domain.Rol;
import com.carrito.domain.Usuario;

public interface IRol extends JpaRepository<Rol, Long>{
	List<Rol> findByUser(Usuario usuario);

}
