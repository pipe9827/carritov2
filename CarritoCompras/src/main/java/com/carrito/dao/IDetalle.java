package com.carrito.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.carrito.domain.Detalle;

public interface IDetalle extends JpaRepository<Detalle, Long>{

}
