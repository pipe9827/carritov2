package com.carrito.service;

import java.util.List;

import com.carrito.domain.Orden;

public interface IOrdenService {

	public List<Orden> listarOrdenes();

	public Orden guardar(Orden orden);

	public void elminar(Orden orden);

	public Orden encontrarOrdenPorId(Long id);
}
